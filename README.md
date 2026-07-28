# 🤖 Slacky - Slack Bot Integration

A production-ready Slack bot built with **Node.js** and the official **@slack/bolt** framework, configured to run seamlessly as a 24/7 background service on Linux using **systemd**.

---

## 🌟 Overview

**Slacky** is designed to provide automated interaction, custom commands, and real-time event responses directly within your Slack workspace. It bridges developer-friendly Node.js automation with enterprise-ready Linux daemon execution.

> *"I built a resilient Slack bot running as a continuous background service—overcoming tough systemd path configuration challenges—which can be tested by simply cloning the repository and setting up your environment tokens."*

---

## ✨ Features

- **⚡ Bolt Framework Integration:** Leverages `@slack/bolt` for handling Slack events, interactive components, and slash commands.
- **🔒 Secure Configuration:** Uses `dotenv` to separate environment credentials from codebase files.
- **🔄 Systemd Service Integration:** Automatically restarts on failure or system reboot for high availability.
- **📊 Real-time Monitoring:** Integrated with systemd journal logging (`journalctl`) for live debugging.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** `@slack/bolt`
- **Environment Management:** `dotenv`
- **Process Management:** Linux `systemd` / `systemctl`
- **Version Control:** Git

---

## 💡 Engineering Highlights

### What I Made
A complete Slack bot application integrated into Slack's API ecosystem, deployed as a self-healing Linux service for production reliability.

### Challenges Overcome
Deploying Node.js scripts via systemd introduced path-resolution issues like `status=200/CHDIR`. Resolving this required mastering Linux service configuration, absolute directory paths (`/home/doom/slacky`), permissions, and daemon lifecycle management.

### What I'm Proud Of
Transforming a basic local script into a resilient, background daemon that auto-recovers (`Restart=on-failure`) without relying on open terminal sessions or fragile manual starts.

---

## 🚀 Quick Start & Testing

Follow these steps to run and test **Slacky** on your local machine or server.

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm (Node Package Manager)
- A Slack workspace where you have admin permissions to install apps

### 2. Slack App Setup
1. Go to [Slack API Apps](https://api.slack.com/apps) and click **Create New App** (From scratch).
2. Give your app a name and select your workspace.
3. Enable **Socket Mode** (under *Settings > Socket Mode*) and generate an **App-Level Token** with the `connections:write` scope.
4. Add required Bot Token Scopes under *OAuth & Permissions* (e.g., `chat:write`, `app_mentions:read`, `commands`).
5. Install the app to your workspace and copy the **Bot User OAuth Token** (`xoxb-...`).

### 3. Installation
Clone the repository and install the required dependencies:

```bash
git clone [https://github.com/Gopuabhayan/slack_bot.git](https://github.com/Gopuabhayan/slack_bot.git)
cd slack_bot
npm install
