const connection = require('../helpers/connect');
// const reservationHelper = require('../helpers/reservationHelper');

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

exports.get28DayCalander = (req, res) => {
    let calander = [] as any;

    // Reservations for next 28 days
    const result = [
        {
            id: 1,
            guestAmount: 4,
            uniqueString: '123456789',
            dateOfCreation: '2021-01-01',
            dateOfReservation: '2022-12-28 16:15:00',
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
    let loopDate: Date = new Date();
    for (let i = 0; i < 28; i++) {
        loopDate.setDate(loopDate.getDate() + 1);
        calander[i] = {
            day: getDayFromNumber(loopDate.getDay()),
            year: loopDate.getFullYear() - 2000,
            fullYear: loopDate.getFullYear(),
            month: loopDate.getMonth() + 1, /* It's an index so starts from 0 */
            date: loopDate.getDate(),
            timePeriods: [],
        };
        for (let j = 0; j < 21; j++) {
            let hour = 16 + Math.floor(j / 4);
            let minute = (15 * j - 60 * Math.floor(j / 4)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            calander[i].timePeriods[j] = {
                time: `${hour}:${minute}:00`,
                peopleCounter: 0,
            }
        };
    };

    // Edit calander with reservations
    // Loop through results
    for (let i = 0; i < result.length; i++) {
        // Loop through calander dates
        for (let j = 0; j < calander.length; j++) {
            // getting rid of the hours of the result date
            let resultFullDate = new Date(result[i].dateOfReservation);
            let resultDate = new Date(`${resultFullDate.getFullYear()}-${resultFullDate.getMonth() + 1}-${resultFullDate.getDate()}`);
            let calanderDate = new Date(`${calander[j].fullYear}-${calander[j].month}-${calander[j].date}`);
            // Loop through calander time
            if (resultDate.getTime() == calanderDate.getTime()) {
                for (let l = 0; l < calander[j].timePeriods.length; l++) {
                    let calanderTime = calander[j].timePeriods[l].time;
                    let calanderFullDate = new Date(`${calander[j].fullYear}-${calander[j].month}-${calander[j].date}T${calanderTime}`);
                    if (resultFullDate.getTime() == calanderFullDate.getTime()) {
                        calander[j].timePeriods[l].peopleCounter += result[i].guestAmount;
                        console.log("Hello");
                    }
                }
                console.log("World");
            }
        }
    }

    console.log(new Date("21:00:00"));
    res.send(calander);
}

// Function to get the Day in string value from number
function getDayFromNumber(value: number): string {
    let dayString: string = '';

    switch(value) {
      case 0:
        dayString = 'Sun';
        break;
      case 1:
        dayString = 'Mon';
        break;
      case 2:
        dayString = 'Tue';
        break;
      case 3:
        dayString = 'Wed';
        break;
      case 4:
        dayString = 'Thu';
        break;
      case 5:
        dayString = 'Fri';
        break;
      case 6:
        dayString = 'Sat';
        break;
      default:
        dayString = 'Undifiend';
        break;
    }
    return dayString;
}