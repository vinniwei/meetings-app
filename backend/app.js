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
  const friend_list = [
    {
      id: 1,
      first_name: 'Vincent',
      last_name: 'Wei'
    },
    {
      id: 2,
      first_name: 'Thomas',
      last_name: 'Ackling'
    }
  ];

  res.json(friend_list);
});

app.listen(API_PORT, () => console.log(`meeting-app server listening on port ${API_PORT}`))

