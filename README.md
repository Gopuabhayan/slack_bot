# Slacky - Slack Bot Service

A simple, production-ready Slack bot built with Node.js and `@slack/bolt`. It's configured to run continuously as a systemd background service on Linux.

---

## 📌 What it does

* **Slack Integration:** Responds to mentions, slash commands, and events using Socket Mode.
* **Background Service:** Runs as a systemd daemon (`slacky.service`), so it stays active 24/7 and auto-restarts on failure.
* **Clean Config:** Uses `dotenv` for handling tokens and environment variables safely.

---

## 🛠️ Tech Stack

* **Node.js** (v18+)
* **@slack/bolt** framework
* **systemd** (Linux process management)

---

## 🚀 Setup & Installation

### 1. Prerequisites
* Node.js & npm installed
* A Slack workspace with permission to add custom apps

### 2. Get your Slack Tokens
1. Go to [Slack API Dashboard](https://api.slack.com/apps) and create an app.
2. Enable **Socket Mode** and copy the App Token (`xapp-...`).
3. Under **OAuth & Permissions**, add required Bot Scopes (`chat:write`, `app_mentions:read`, etc.).
4. Install the app to your workspace and copy the Bot Token (`xoxb-...`).

### 3. Local Setup

```bash
# Clone the repository
git clone [https://github.com/Gopuabhayan/slack_bot.git](https://github.com/Gopuabhayan/slack_bot.git)
cd slack_bot

# Install dependencies
npm install
