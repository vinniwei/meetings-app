const express = require('express');
const app = express();

const router = express.Router();
const API_PORT = 3001;

router.get('api/friendlist', (res, req) => {
  const friend_list = [
    {
      id: 1,
      first_name: 'Vincent',
      last_name: 'Wei'
    },
    {
      id: 2,
      first_name: 'Thomous',
      last_name: 'Ackling'
    }
  ];

  res.json(friend_list);
});

app.listen(API_PORT, () => console.log(`meeting-app server listening on port ${API_PORT}`))

