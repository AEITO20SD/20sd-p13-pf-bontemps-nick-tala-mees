import { count } from "console";
import e from "express";

const connection = require('../helpers/connect');
const generateCalander = require('../helpers/reservation/generateCalander');

exports.getReservation = (req, res) => {

    const time = Date.now();
    console.log(time);
    const data = [{
        id: 1,
        guestAmount: 4,
        uniqueString: '123456789',
        dateOfCreation: '2021-01-01',
        dateOfReservation: '2021-01-01',
    }]
    res.send(data);
}

exports.getCalander = (req, res) => {
    // Reservations for next 28 days
    const result = [
        {
            id: 1,
            guestAmount: 51,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2023-01-14 16:00:00',
        },
        {
            id: 2,
            guestAmount: 51,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2023-01-14 17:15:00',
        },
        {
            id: 3,
            guestAmount: 51,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2023-01-14 18:30:00',
        },
        {
            id: 4,
            guestAmount: 51,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2023-01-14 19:45:00',
        },
        {
            id: 5,
            guestAmount: 51,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2023-01-14 21:00:00',
        },
    ];

    // Generate a 28 day calander
    let calander = generateCalander.generateCalander();

    // Edit calander with reservations
    // Loop through results
    for (let i = 0; i < result.length; i++) {

        // Getting resultDateTime from dateOfReservation
        let resultDateTime = new Date(result[i].dateOfReservation);

        // Making ResultDate from dateOfReservation
        let resultDate = new Date(result[i].dateOfReservation);
        resultDate.setHours(0,0,0,0);

        // Loop through calander dates
        for (let j = 0; j < calander.length; j++) {

            // Getting calanderDate
            let calanderDate = calander[j].date;

            // Check if calanderDate is same as resultDate
            if (resultDate.getTime() == calanderDate.getTime()) {

                // Loop through calander time
                for (let l = 0; l < calander[j].timePeriods.length; l++) {

                    // Getting calanderDateTime
                    let calanderDateTime = calander[j].timePeriods[l].dateTime;
                    
                    // Check if calanderDateTime is same as resultDateTime
                    if (resultDateTime.getTime() == calanderDateTime.getTime()) {

                        // Loop to reach 5 timePeriods
                        for (let k = 0; k < 5; k++) {

                            // Index to reach 5 timePeriods
                            let index = l + k;

                            // Filling in the counter
                            calander[j].timePeriods[index].peopleCounter += result[i].guestAmount;

                            // Check if the timeperiod is full
                            if (calander[j].timePeriods[index].peopleCounter > 50) {

                                // Sets the timePeriod as unavailable
                                calander[j].timePeriods[index].availability = 'unavailable';
                            }
                        }
                    }
                }
            }
        }
    }

    // Loop through calander dates
    for (let i = 0; i < calander.length; i++) {

        // Counter for full timePeriods
        let counter: number = 0;

        // Loop through calander time
        for (let j = 0; j < calander[i].timePeriods.length; j++) {

            // Check if timeperiod is unavailable
            if (calander[i].timePeriods[j].availability == 'unavailable') {

                // add to counter
                counter++;
            }
        }

        // Check if all timeperiods are full
        if (counter === 25) {

            // Sets the day as unavailable
            calander[i].availability = 'unavailable';
        }
    }

    res.send(calander);
}

exports.insertDate = (req, res) => {

    // Request body data decalration
    const { guestAmount, uniqueString, reservationDate } = req.body

    // Update the reservation with guestAmount and reservationDate
    connection.query('UPDATE reservation SET guestAmount = ?, reservationDate = ? WHERE uniqueString = ?', 
    [guestAmount, reservationDate, uniqueString], function(error, results, fields) {
        if(error) {
            res.status(500);
        } else {
            res.status(200);
        }   
    });           
}