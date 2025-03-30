const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API with Matt!' });
});

app.get('/api/data',(req,res)=>{
  res.json({message:'Hello from the backend!',data:[1,2,3,4,5]});
});
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 9070;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
