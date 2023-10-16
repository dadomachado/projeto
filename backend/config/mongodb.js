// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
//     .catch(e => {
//         const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
//         console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
//     })

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String
});

async function run() {
    // Create a separate connection and register a model on it...
    const conn = mongoose.createConnection();
    conn.model('User', schema);

    // But call `mongoose.connect()`, which connects MongoDB's default
    // connection to MongoDB. `conn` is still disconnected.
    await mongoose.connect('mongodb://localhost/knowledge_stats')

    await conn.model('User').findOne(); // Error: buffering timed out ...
}

run();

async function run() {
    await mongoose.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true, useNewUrlParser: true });
    mongoose.model('User', schema);

    await mongoose.model('User').findOne(); // Works!
}
