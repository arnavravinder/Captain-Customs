module.exports = async (req, res) => {
    if (req.body && req.body.challenge) {
      return res.status(200).json({ challenge: req.body.challenge });
    }
  
    if (req.body.event && req.body.event.type === 'app_mention') {
      return res.status(200).send('Handled mention event');
    }
  
    res.status(200).send('No relevant event to handle');
  };
  