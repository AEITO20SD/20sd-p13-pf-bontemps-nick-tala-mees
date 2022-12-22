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
            guestAmount: 4,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2022-12-28T16:15:00',
        },
        {
            id: 2,
            guestAmount: 6,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2022-12-28 16:45:00',
        },
        {
            id: 3,
            guestAmount: 8,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2022-12-28 20:15:00',
        },
        {
            id: 4,
            guestAmount: 5,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2022-12-28 21:00:00',
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
                        }
                    }
                }
            }
        }
    }

    res.send(calander);
}