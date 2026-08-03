# Slacky - Slack Bot 

A Slack bot that has tools, made using Node.js and the Slack Bolt framework. Hosted 24/7 on Nest.


---

 slacky in Action:

![Slacky Demo](assets/demo.png)


---

 commant & featurs

* /neo-ping - Checks the bot's current network latency.
* /neo-catfact - Gets cat facts 
* /neo-help - ask, how can I help you

---

## 🚀 Setup & installation

 Prerequisites
* Node.js & npm installed
* A Slack workspace with permission to add custom apps

 Get your Slack Tokens
1. Go to [Slack API Dashboard](https://api.slack.com/apps) and create an app.
2. Enable **Socket Mode** and copy the App Token (`xapp-...`).
3. Under **OAuth & Permissions**, add required Bot Scopes (`chat:write`, `app_mentions:read`, etc.).
4. Install the app to your workspace and copy the Bot Token (`xoxb-...`).

  Setup

```bash
# Clone the repository
git clone https://github.com/Gopuabhayan/slack_bot.git
cd slack_bot

# Install dependencies
npm install
