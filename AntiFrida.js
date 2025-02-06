var FRIDA_PORT = 12345;
var FRIDA_PROCESS_NAMES = ["frida-server", "frida-agent"];
var FRIDA_FILES = ["frida-agent.so", "libfrida-gum.so"];
var FRIDA_STRINGS = ["Frida", "GumJS", "frida-agent"];
var TARGET_MODULES = ["libc.so", "libart.so"];

function hideFridaProcesses() {
    var getProcName = Module.findExportByName(null, "proc_pidpath");
    if (getProcName) {
        Interceptor.attach(getProcName, {
            onEnter: function (args) {
                var procName = Memory.readUtf8String(args[1]);
                if (FRIDA_PROCESS_NAMES.includes(procName)) {
                    Memory.writeUtf8String(args[1], "some_legit_process_name");
                }
            }
        });
    }
}

function hideFridaFiles() {
    var openPtr = Module.findExportByName(null, "open");
    if (openPtr) {
        Interceptor.attach(openPtr, {
            onEnter: function (args) {
                var path = Memory.readUtf8String(args[0]);
                if (FRIDA_FILES.some(file => path.includes(file))) {
                    args[0] = Memory.allocUtf8String("/dev/null");
                }
            }
        });
    }
}

function changeFridaPort() {
    var portPtr = Module.findExportByName(null, "frida_server_main");
    if (portPtr) {
        Interceptor.attach(portPtr, {
            onEnter: function (args) {
                args[1] = ptr(FRIDA_PORT);
            }
        });
    }
}

function obfuscateFridaStrings() {
    var strstrPtr = Module.findExportByName(null, "strstr");
    if (strstrPtr) {
        Interceptor.attach(strstrPtr, {
            onEnter: function (args) {
                var needle = Memory.readUtf8String(args[1]);
                if (FRIDA_STRINGS.some(str => needle.includes(str))) {
                    args[1] = Memory.allocUtf8String("obfuscated_string");
                }
            }
        });
    }
}

function bypassHookingDetection() {
    var dlopenPtr = Module.findExportByName(null, "dlopen");
    if (dlopenPtr) {
        Interceptor.attach(dlopenPtr, {
            onEnter: function (args) {
                var libName = Memory.readUtf8String(args[0]);
                if (TARGET_MODULES.includes(libName)) {
                    this.skip = true;
                }
            }
        });
    }
}

function main() {
    hideFridaProcesses();
    hideFridaFiles();
    changeFridaPort();
    obfuscateFridaStrings();
    bypassHookingDetection();
}

main();