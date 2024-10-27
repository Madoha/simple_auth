require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');

const authRouter = require('./route/authRoute');
const projectRouter = require('./route/projectRoute');
const globalErrorHandler = require('./controller/errorController');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');

const app = express();

app.use(express.json())

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/project', projectRouter)

app.use('*', catchAsync(async (req, res, next) => {
    throw new AppError('page not found', 404)
}));

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('server listening')
})