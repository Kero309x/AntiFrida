# AntiFrida - Instrumentation Defense Evasion for Security Research

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![OWASP MASTG](https://img.shields.io/badge/OWASP-MASTG%20Aligned-green.svg)](https://mas.owasp.org/MASTG/)

## 📖 Description
A Frida-based JavaScript script designed for authorized security assessment, penetration testing, and mobile application research aligned with **OWASP MASTG**. It assists security researchers in analyzing anti-tamper and anti-instrumentation mechanisms in controlled laboratory environments.

## ⚡ Features
- **Process Hiding**: Modifies the names of Frida-related processes to assess detection heuristics.
- **File Redirection**: Redirects access to Frida-specific files to evaluate filesystem integrity checks.
- **Port Modification**: Changes default Frida runtime ports to evaluate network-based detection.
- **String Obfuscation**: Replaces sensitive memory strings with obfuscated placeholders.
- **Hooking Assessment**: Assesses how application logic reacts to dynamically hooked functions.
- **Console Logging**: Provides real-time debugging output by logging actions to stdout.

## 🚀 Usage
1. Install Frida on your testing workstation and rooted test device.
2. Download or clone this script.
3. Run the script against your authorized target application:
   ```bash
   frida -U -n <target_app> -l AntiFrida.js
   ```

---

## ⚖️ Legal & Educational Disclaimer

> [!IMPORTANT]
> This repository and script are intended **strictly for authorized security research, vulnerability assessment, and penetration testing** with explicit prior permission from the application owner, in accordance with the OWASP Mobile Application Security Testing Guide (MASTG).
> 
> The author does not condone, support, or take responsibility for any unauthorized usage, malicious activities, software piracy, or violation of applicable laws and terms of service. Users are solely responsible for ensuring compliance with all local laws and third-party terms.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
