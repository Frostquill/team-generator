const { expect } = require("@jest/globals")
const Manager = require('../lib/Manager')

test('check for employee', () => {
    const employee = new Manager('Michael', '12344', 'ruiz824@gmail.com', '714-315-5149');
    console.log(employee);

    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('12344');
    expect(employee.email).toBe('ruiz824@gmail.com');
    expect(employee.officeNumber).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Manager');
});