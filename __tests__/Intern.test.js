const { expect } = require("@jest/globals")
const Intern = require('../lib/Intern')

test('check for employee', () => {
    const employee = new Intern('Michael', '12344', 'ruiz824@gmail.com', 'UCLA');
    console.log(employee);

    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe('12344');
    expect(employee.email).toBe('ruiz824@gmail.com');
    expect(employee.school).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Intern');
});