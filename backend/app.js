const express = require('express');
const app = express();

const API_PORT = 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/friendlist', (req, res) => {
  const friendList = [
    {
      id: 1,
      firstName: 'Vincent',
      lastName: 'Wei'
    },
    {
      id: 2,
      firstName: 'Thomas',
      lastName: 'Ackling'
    }
  ];

  res.json(friendList);
});

app.listen(API_PORT, () => console.log(`meeting-app server listening on port ${API_PORT}`))

