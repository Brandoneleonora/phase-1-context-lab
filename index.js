/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = (str) => {
   const card = {
    firstName:NaN,
    familyName:NaN,
    title:NaN,
    payPerHour:NaN,
    timeInEvents:NaN,
    timeOutEvents:NaN
   }

   card.firstName = str[0]
   card.familyName = str[1]
   card.title = str[2]
   card.payPerHour = str[3]
   card.timeInEvents = []
   card.timeOutEvents = []

   return card
}


const createEmployeeRecords = (arr) => {
    //creates an employee card for each array element 
    const employeeCards = arr.map(ar => createEmployeeRecord(ar))
    //console.log(the cards in a new array)
    //console.log(employeeCards)
    return employeeCards
}

  
function createTimeInEvent(arg){
    //Need to create a new object
    const timeIn = {
        type:"TimeIn",
        hour:parseInt(arg.substr(11, 15)),
        date:arg.substr(0, 10)
    }  

    this.timeInEvents.push(timeIn)


    return this
}

function createTimeOutEvent(arg){
    //Need to create a new object
    const timeOut = {
        type:"TimeOut",
        hour:parseInt(arg.substr(11, 15)),
        date:arg.substr(0, 10)
    }  

    this.timeOutEvents.push(timeOut)


    return this
}

function hoursWorkedOnDate(arg){
    const inHour = this.timeInEvents.find(hour => hour.date === arg)
    const inOut = this.timeOutEvents.find(hour => hour.date === arg)
    let result = (inOut.hour - inHour.hour) / 100

    return result
}

function wagesEarnedOnDate(date){
    let pay = this.payPerHour
    let hour = hoursWorkedOnDate.call(this, date)
    
    return pay * hour
}



function findEmployeeByFirstName(cards, name){
    const card = cards.find(first => first.firstName === name)

    return card
}

function calculatePayroll(arr){
    let allWages = []
    arr.forEach(ar => allWages.push(allWagesFor.call(ar)))

    const total = allWages.reduce((total, current) => total + current, 0)

    console.log(total)

    return total

}