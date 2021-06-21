const { expect } = require("@jest/globals")
const Employee = require('../lib/Employee')

test('check for employee', () => {
    const employee = new Employee('Michael', '12344', 'ruiz824@gmail.com');
    console.log(employee);

    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('12344');
    expect(employee.email).toBe('ruiz824@gmail.com');
});