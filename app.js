import express from 'express';
import logger from "morgan";
import bodyParser from 'body-parser';

import router from './src/routes/index';
import menuRouter from './src/routes/menu';
import mealRouter from './src/routes/meal';
import orderRouter from './src/routes/orders';

/* import userRouter from './routes/users';
// import catererRouter from './routes/caterer'; */

// Set environment port

// set up the express app
const app = express();

// log requests to the console.
app.use(logger('dev'));

// parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use(menuRouter);
app.use(mealRouter);
app.use(orderRouter);

/* app.use(userRouter);
app.use(catererRouter);*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


export default app;