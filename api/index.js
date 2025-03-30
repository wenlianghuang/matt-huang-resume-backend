const express = require('express');
const cors = require('cors');
const app = express();

const cors = require('cors');
app.use(cors({origin: '*',methods: "GET,POST,PUT,DELETE"}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API with Matt!' });
});

app.get('/api/data',(req,res)=>{
  res.json({message:'Hello from the backend!',data:[1,2,3,4,5]});
});


const port = process.env.PORT || 9070;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
