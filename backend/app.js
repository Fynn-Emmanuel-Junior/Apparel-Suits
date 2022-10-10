import express from 'express';
import cors from 'cors';
import router from './routes/routePages.js';
// const express = require('express');



const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use('/api/suits', router);


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

