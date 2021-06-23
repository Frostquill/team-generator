const { expect } = require("@jest/globals")
const Engineer = require('../lib/Engineer')

test('check for employee', () => {
    const employee = new Engineer('Michael', '12344', 'ruiz824@gmail.com','Frostquill');
    console.log(employee);

    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('12344');
    expect(employee.email).toBe('ruiz824@gmail.com');
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Engineer');
});