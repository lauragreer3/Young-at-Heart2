var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VacationSchema = new Schema({
    vacation_nickname: {
        type: String,
        required: true
    },
    start_date: {
        type: Date, 
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
            park_selected: { type: String, default: 'WDW_MK' },
            lunch_venue: String,
            dinner_venue: String,
            accomodations: String
        }
    ],
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    }

    
});

VacationSchema.pre('save', function (next) {
    var vacation = this;
    console.log('running post save hook');
    console.log(vacation);
    console.log('start date' + vacation.start_date.toLocaleDateString());
    if(this.isNew) {
        for (var d = new Date(vacation.start_date); d <= vacation.end_date; d.setDate(d.getDate() + 1)) {
            vacation.vacation_days.push({
                vacation_date: new Date(d),
            });
            // vacation.markModified('vacation_days');
            console.log('adding day to vacation: ' + d.toLocaleDateString());
        }
        console.log('vacation start date after loop: ' + vacation.start_date.toLocaleDateString());
        return next();
    }
    else {
        console.log(vacation);
        return next();
    }
    
    
    
   

    // vacation_schema.findIdAndUpdate(vacation._id, vacation, function(err, vacation) {
    //     if(err) {
    //         return next(err);
    //     }
    //     console.log('saved vacation_days');
    // })
});

module.exports = mongoose.model('Vacation', VacationSchema);