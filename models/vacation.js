var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VacationSchema = new Schema({
    vacation_nickname: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        default: Date.now, 
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    date_modified: {
        type: Date,
        default: Date.now
    },
    vacation_days: [
        {
            vacation_date: Date,
            park_selected: Number,
            lunch_venue: String,
            dinner_venue: String,
            accomodations: String
        }
    ],
    user_id: {
        type: Number,
        required: true
    }

    
});

module.exports = mongoose.model('Vacation', VacationSchema);