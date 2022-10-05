import router from './routes/routePages.js';
import express from 'express';
// const express = require('express');



const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/suits', router);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

