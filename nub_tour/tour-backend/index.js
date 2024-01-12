const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4500;
const PassengerRouter = require('./router/PassengerRouter');
const BusRouter = require('./router/BusRouter');
const ReservationRouter = require('./router/ReservationRouter');
const db = require('./models');

app.use(express.json());
app.use(cors());
app.use('/passenger',PassengerRouter);
app.use('/bus',BusRouter); 
app.use('/reservation',ReservationRouter);


db.sequelize.sync().then(() => {

    app.listen(PORT, (err)=>{
        if(!err){
            console.log(`Server is running on port ${PORT}`);
        }else{
            console.error("Error while starting the server: ", err);
        }
    });

}).catch((err) => {
    console.log(err);
});

