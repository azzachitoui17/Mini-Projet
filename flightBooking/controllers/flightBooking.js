const flightSchema=require('../models/flight');

module.exports.createFlight=async(req,res)=>{
const {origin,destination,date,place}=req.body;
const flight = new flightSchema({origin,destination,date,place});
flight.save();
return res.status(201).json(flight);
};

module.exports.getFlights = async (req, res) => {
    try {
      const flights = await flightSchema.find({});
      res.json(flights);
    } catch (err) {
      console.error('Failed to get flights:', err);
      res.status(500).json({ error: 'Failed to get flights' });
    }
  };
  

module.exports.deleteFlight = async (req, res) => {
    const { flightId } = req.params;
    try {
      await flightSchema.findByIdAndDelete(flightId);
      res.json({ message: 'Flight deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  module.exports.updateFlight=async(req,res)=>{
    const{flightId}=req.params;
    const {origin,destination,date,place}=req.body;
    const flight=await flightSchema.findByIdAndUpdate(
        flightId,
        {origin,destination,date,place},
        {new:true}
    );
    res.json(flight);
  };
  