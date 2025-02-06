# Frida Bypass Script

## Description
A Frida-based JavaScript script designed to bypass common anti-Frida detection mechanisms.

## Features
- Process Hiding : Modifies the names of Frida-related processes to avoid detection.
- File Redirection : Redirects access to Frida-specific files to /dev/null.
- Port Modification : Changes the default Frida server port to evade network-based detection.
- String Obfuscation : Replaces sensitive strings (e.g., "Frida", "GumJS") with obfuscated placeholders.
- Hooking Bypass : Prevents specific modules from triggering anti-hooking mechanisms.
- Console Logging : Provides real-time feedback by logging all actions directly to the console.

## Usage
1. Install Frida on your device.
2. download script `Antifrida.js`.
3. Run the script using Frida:
   ```bash
   frida -U -n <target_app> -l Antifrida.js
