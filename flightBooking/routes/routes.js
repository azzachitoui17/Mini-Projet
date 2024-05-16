const {Router} =require('express');
const flightController=require('../controllers/flightBooking');
const router=Router();

router.get('/flights',flightController.getFlights);
router.post('/createFlight',flightController.createFlight);
router.put('/updateFlight/:flightId',flightController.updateFlight);
router.delete('/deleteFlight/:flightId',flightController.deleteFlight);

module.exports=router;