require("dotenv").config();
const axios = require("axios");
const { App } = require("@slack/bolt");


const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});


app.command("/neo-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});


app.command("/neo-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: `🤖 SlackBot HackClub Commands

    /neo-catfact - Get a random cat fact
    /neo-ping - Check the bot's latency
    /neo-help - Show this help message`
  });
});   



app.command("/neo-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("Bot is running!");
})();
