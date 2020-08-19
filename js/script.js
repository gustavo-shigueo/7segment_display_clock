const digits = document.querySelectorAll('[data-digit]')
const number = [
    [ 1, 1, 1, 1, 1, 1, 0 ],
    [ 0, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 0, 1, 1, 0, 1 ],
    [ 1, 1, 1, 1, 0, 0, 1 ],
    [ 0, 1, 1, 0, 0, 1, 1 ],
    [ 1, 0, 1, 1, 0, 1, 1 ],
    [ 1, 0, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 0, 1, 1 ]
]

const getTime = (currentDate = new Date(), timeArray = []) => {
    const dateArray = [currentDate.getHours(), currentDate.getMinutes()]
    for(date of dateArray) timeArray.push(getTensDigit(date), getOnesDigit(date))
    for(let i = 0; i < 4; i++) setClockDisplay(digits[i], timeArray[i])
}

const getTensDigit = time => number[Math.floor(time / 10)]

const getOnesDigit = time => number[time % 10]

const setClockDisplay = (el, digit) => {
    for(let j = 0; j < 7; j++) el.querySelectorAll('.segment')[j].style.backgroundColor = digit[j] ? 'red' : '#0A0A0A'
}

getTime()
setInterval(getTime, 100)