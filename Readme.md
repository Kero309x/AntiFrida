# Frida Bypass Script

## Description
A Frida-based JavaScript script designed to bypass common anti-Frida detection mechanisms.

## Features
- Hides Frida processes.
- Redirects access to Frida files.
- Changes the default Frida port.
- Obfuscates Frida-related strings.
- Bypasses hooking detection for specific modules.

## Usage
1. Install Frida on your device.
2. download script `Antifrida.js`.
3. Run the script using Frida:
   ```bash
   frida -U -n <target_app> -l Antifrida.js
