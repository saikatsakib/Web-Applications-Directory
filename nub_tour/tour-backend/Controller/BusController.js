const Buses = require('./../models').Buses;


const index = async (req,res)=>{
    let buses = await Buses.findAll();
    res.json(buses);
}

const createBus = async (req,res)=>{
    let bus = req.body;
    await Buses.create(bus);
    res.json(bus);
}

const updateBus = async (req, res)=>{
    await Buses.update();
}

module.exports = {index, createBus, updateBus};