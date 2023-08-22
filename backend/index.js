const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Handle POST request
app.post('/analyze', async (req, res) => {
  try {
    const response = await axios.post(
      'https://detect.roboflow.com/garud-tech/1',
      req.body,
      {
        params: {
          api_key: 'YOUR_ROBOFLOW_API_KEY'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
