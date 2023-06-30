const { MongoClient } = require('mongodb');
require('dotenv').config();

let connectionString = process.env.DB_URL;
const client = new MongoClient(connectionString);
let database;

module.exports = {
    connectToDb: async () => {
        try {
            await client.connect();
            database = client.db('sample_guides');
            console.log('Connected successfully to the database');
            return database;
        } catch(err) {
            console.error('Error connecting to the database:', err);
        }
    }
}