const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://yaniel:${process.env.MONGO_PASSWORD}@calculatorDB.b3mte7w.mongodb.net/?retryWrites=true&w=majority&appName=calculatorDB`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const connectMongo = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

const fetchCollection = async (collectionName:string) => {
    const database = client.db('calculatorDB');
    return database.collection(collectionName);
}

const closeClient = async () => {
    await client.close();
}

process.on('SIGINT', async () => {
    await client.close();
    process.exit();
});

export { connectMongo, fetchCollection, closeClient };