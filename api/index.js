const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API with Matt!' });
});

const port = process.env.PORT || 9070;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
