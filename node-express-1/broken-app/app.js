const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    const developerPromises = req.body.developers.map(async (username) => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return {
        name: response.data.name,
        bio: response.data.bio,
      };
    });

    const results = await Promise.all(developerPromises);

    return res.json(results);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
