const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ndran.mongodb.net/byte`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
