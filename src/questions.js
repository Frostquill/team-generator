const inquirer = require('inquirer');
const Employee = require('../lib/Employee');


function EmployeeInfo () {
    inquirer.prompt ([{
        type:'input',
        name: 'name',
        message: 'What is your name?'
    }])
    .then (({name})=>{ 
        new Employee(name);
        this.getId();
     })
};

EmployeeInfo.prototype.getId = function () {
    inquirer.prompt
    ([{
        type: 'input',
        name: 'id',
        message:'what is your id number,'
    }]).then(({id}) =>{
        new Employee(id);
        this.getEmail();
    })
};
EmployeeInfo.prototype.getEmail = function () {
    inquirer.prompt 
    ([{
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }]) .then (({email}) => {
        new Employee(email);
    })

};



    





module.exports = EmployeeInfo;