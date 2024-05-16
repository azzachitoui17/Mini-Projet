const mongoose=require('mongoose');

const flightSchema = new mongoose.Schema({

    origin:{
        type:String,
        required: true
    },
    destination:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    place:{
        type:Number,
        required:true
    }


});

const flightBooking=mongoose.model('flightBooking',flightSchema);
module.exports=flightBooking;