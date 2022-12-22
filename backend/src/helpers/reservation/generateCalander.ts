exports.generateCalander = (req) => {
    let calander = [] as any;

    // Generate a 28 day calander

    for (let i = 0; i < 28; i++) {
        let date: Date = new Date();
        date.setDate(date.getDate() + i + 1);
        date.setHours(0,0,0,0);
        calander[i] = {
            date: date,
            timePeriods: [],
        };
        for (let j = 0; j < 25; j++) {
            let dateTime = new Date();
            let hours = 16 + Math.floor(j / 4);
            let minutes = 15 * j - 60 * Math.floor(j / 4);
            dateTime.setDate(dateTime.getDate() + i + 1);
            // console.log(hours);
            dateTime.setHours(hours,minutes,0,0);
            // console.log(dateTime);
            calander[i].timePeriods[j] = {
                dateTime: dateTime,
                peopleCounter: 0,
            }
        };
    };

    return calander;
}