module.exports = async (req, res) => {
    if (req.body && req.body.challenge) {
      return res.status(200).json({ challenge: req.body.challenge });
    }
  
    if (req.body.event && req.body.event.type === 'app_mention') {
      return res.status(200).send('Handled mention event');
    }
  
    res.status(200).send('No relevant event to handle');
  };


  const { App } = require('@slack/bolt');

  const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });
  
  app.event('app_mention', async ({ event, say }) => {
    await say(`Arrr! Capt'n Customs at yer service for customs estimates!`);
  });
  
  module.exports = app;
  
  