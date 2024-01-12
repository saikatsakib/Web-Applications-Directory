const Passenger = require('./../models').Passengers;


const index = async (req,res)=>{
    let passenger = await Passenger.findAll();
    res.json(passenger);
}

const addPassenger = async (req, res)=>{
    let passenger = req.body;
    await Passenger.create(passenger);
    res.json(passenger);
}





module.exports = {index, addPassenger};