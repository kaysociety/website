<p align="center">
  <img src="assets/banner.png" alt="Kay Bug Bounty Hunter Banner" width="100%">
</p>

<h1 align="center">🛡️ Kay Bug Bounty Hunter</h1>

<p align="center">
  Lightweight Recon & Web Hygiene Scanner for Bug Bounty Hunters
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-blue">
  <img src="https://img.shields.io/badge/License-MIT-green">
  <img src="https://img.shields.io/badge/Status-Active-success">
</p>

# 🛡️ Kay Bug Bounty Hunter

> A lightweight, fast, and non-destructive reconnaissance & web hygiene scanner built for modern bug bounty hunters.

---

## 🚀 Overview

**Kay Bug Bounty Hunter** is a Python-based security tool designed to help researchers quickly perform **authorized reconnaissance** and identify common web security misconfigurations.

It focuses on **clarity, speed, and practical results** — making it ideal for:

* Bug bounty hunters
* Cybersecurity students
* Web pentesters

Unlike noisy scanners, this tool performs **safe, controlled checks** and generates **clean, professional reports**.

---

## ✨ Features

* 🔍 Subdomain enumeration (wordlist + passive discovery)
* 🌐 HTTP/HTTPS service analysis
* 🔐 Security headers inspection
* 🍪 Cookie security flag analysis
* 📄 Form & endpoint discovery
* 🧠 JavaScript endpoint extraction
* 🔑 Secret detection (API keys, tokens, credentials)
* ⚡ Multi-threaded scanning engine
* 📊 Automatic risk scoring (0–100)
* 📁 Report generation:

  * TXT (quick view)
  * JSON (automation)
  * HTML (professional report)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/kay-bug-bounty-hunter.git
cd kay-bug-bounty-hunter
```

### 2. Make executable (Linux/Kali)

```bash
chmod +x kaybugbuntyhunter.py
```

### 3. Run the tool

```bash
python3 kaybugbuntyhunter.py
```

---

## 🧪 Usage

### 🔹 Basic Scan

```bash
python3 kaybugbuntyhunter.py example.com --yes
```

> ⚠️ You must include `--yes` to confirm you have permission to scan the target.

---

## 📌 Command Options

| Option          | Description                                      |
| --------------- | ------------------------------------------------ |
| `--yes`         | Confirm authorized testing (required)            |
| `--passive`     | Enable passive subdomain discovery (crt.sh)      |
| `-o, --output`  | Output directory (default: `bug/output`)         |
| `-t, --threads` | Number of threads (default: 20)                  |
| `--timeout`     | Request timeout in seconds                       |
| `--ports`       | Custom ports (e.g. `80,443,8080` or `8000-8100`) |

---

## 🧰 Examples

### Passive + Faster Scan

```bash
python3 kaybugbuntyhunter.py target.com --yes --passive -t 40
```

### Custom Output Directory

```bash
python3 kaybugbuntyhunter.py target.com --yes -o results/
```

### Custom Ports

```bash
python3 kaybugbuntyhunter.py target.com --yes --ports 80,443,8080,8443
```

---

## 📊 Output

After scanning, reports are saved in:

```
bug/output/
├── report.txt
├── report.json
└── report.html
```

---

## 🌐 HTML Report

The HTML report provides a clean, professional interface including:

* 📈 Risk score
* 📋 Findings table (Severity, Evidence, Recommendations)
* 🌍 Hosts and endpoints
* 🔍 Discovered services and metadata

Open it in your browser:

```bash
xdg-open bug/output/report.html
```

---

## 🔍 What the Tool Detects

### 🔴 High Severity

* Secrets exposed in JavaScript (API keys, tokens)
* Possible subdomain takeover fingerprints

### 🟡 Medium Severity

* Missing security headers
* Weak cookie configurations (Secure, HttpOnly, SameSite)

### 🔵 Informational

* Open ports
* Forms and endpoints
* Interesting URLs
* Metadata files (robots.txt, sitemap.xml)

---

## 📈 Risk Scoring

Each finding contributes to a total **risk score (0–100)**:

* Critical → 40
* High → 25
* Medium → 10
* Low → 4
* Info → 1

---

## 🧠 Recommended Workflow

1. Run scan:

```bash
python3 kaybugbuntyhunter.py target.com --yes --passive
```

2. Open HTML report

3. Prioritize:

* 🔴 High → immediate investigation
* 🟡 Medium → configuration fixes
* 🔵 Info → manual testing leads

---

## ⚠️ Legal Disclaimer

This tool is intended for **authorized security testing only**.

You must:

* Only scan systems you **own**, or
* Have **explicit permission** to test

The author is not responsible for misuse.

---

## 🧑‍💻 Author

**Karabo Kosi (Kay Society)**

* 🎥 YouTube: https://www.youtube.com/@kaysociety404
* 💼 LinkedIn: https://www.linkedin.com/in/karabo-kosi-534501380/

---

## ⭐ Support

If you find this project useful:

* ⭐ Star the repository
* 🍴 Fork it
* 📢 Share it

---

## 💡 Roadmap

* [ ] CVE detection
* [ ] Directory brute forcing
* [ ] API fuzzing
* [ ] Screenshot capture
* [ ] Integration with Burp Suite / OWASP ZAP

---

## 📜 License

This project is licensed under the MIT License.

---

🔥 **Built for hackers. Designed for clarity.**
