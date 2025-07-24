const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route');
const cors = require('cors');
const { connectDB } = require('./config/init_db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});

