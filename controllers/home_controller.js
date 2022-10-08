const Habit = require('../models/habits');
const Datee = require('../models/date');
var moment = require('moment');
module.exports.home = function (req, res, err) {

    var day = new Date();


    Habit.find({}, function (err, habit) {
        if (err) {
            console.log("Error in finding the habits");
        }
        return res.render('home', {
            title: 'Home',
            habits: habit,

            day: day,
            dayT: day,
        });
    })




}

module.exports.updateHabit = async function (req, res, err) {

    console.log(req.params.id);


    let habit = await Habit.findById(req.params.id);


    let dates = habit.dates;
    let found = false;
    let temp = {
        'date': req.body.date,
        'complete': req.body.status
    };


    dates.find(function (item, index) {
        if (item.date === req.body.date) {
            item.complete = req.body.status;
            found = true;


        }

    });
    if (!found) {
        dates.push(temp);
    }

    await habit.save();
    console.log(dates);
    return res.redirect('back');
}




module.exports.createHabit = function (req, res, err) {
    console.log(req.body);
    Habit.create({
        content: req.body.content,





    }, function (err, habit) {
        if (err) { console.log('error in creating user while signing up'); return }
        else {
            console.log(habit);
            return res.redirect('back');
        }
    })

}

module.exports.showHabit = async function (req, res, err) {

    console.log("hello inside show habit");

    console.log(req.body);

    return res.render('home', {
        title: 'Codeials | Home',
        dates: dates,



    });



}

module.exports.deleteHabit = async function (req, res, err) {
    console.log(req.body.deleteselected);

    let habit = await Habit.findById(req.body.deleteselected);
    if (habit) {
        habit.remove();
    }
    else {
        console.log("could not find the habbit");
    }


    return res.redirect('back');
}