const fs = require(fs)

let employee = function(note){
    let findEmployee = JSON.parse(note)
    let employeeList = findEmployee.map(function(i){
        return i.employee

    })


    console.log('Employee: ' + employeeList)
}

module.exports = employee