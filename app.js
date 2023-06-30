const express = require('express');
const { connectToDb } = require('./db');

// init app & middleware
const app = express();


let db;

// Start the server
const port = 3000;
app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
  db = await connectToDb();
});

// request handlers
app.get('/api/test', async (req, res) => {
    const collection = db.collection('planets');
    const docs = await collection.find({}).toArray();
    console.log('Documents retrieved:', docs);
    return res.json(docs)
})