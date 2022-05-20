var raceNumber = '';

raceNumber = Math.floor(Math.random() * 1000);

var earlyRegister = false;

var runnerAge = 27;

if (earlyRegister === true && runnerAge >= 18) {
    raceNumber = raceNumber + 1000;
} else {
    raceNumber <= 999;
};

if (earlyRegister === true && runnerAge >= 18) {
    console.log(`Runner: ${raceNumber}, you will race at 9:30am.`)
} else if (earlyRegister === false && runnerAge >= 18) {
    console.log(`Runner: ${raceNumber}, you will race at 11:00am.`)
} else if (runnerAge < 18) {
    console.log(`Runner: ${raceNumber}, you will race at 12:30pm.`)
};
