const express = require('express');
const connectDB = require('./src/connection/db');
const authRoutes = require('./src/routes/auth');

const app = express();

connectDB();
app.use(express.json());

//---for debug purpose only
// app.use((req, res, next) => {
//     console.log('Incoming request:', req.method, req.path);
//     console.log('Request body:', req.body);
//     next();
// });

app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
