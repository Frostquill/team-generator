const inquirer = require('inquirer');
const questions = require('../src/questions');



class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        console.log(name,id, email);
    }

    getName() { 
      return this.name = name;
        
    };

    getId () {
        return this.id = id;
        
        

    };

    getEmail() {
        return this.email = email;

    };

    getRole() {
        return 'Employee'
    };

}



    // inquirer.prompt({
    //     type: 'input',
    //     name: 'email',
    //     message:'What is your email?'
    // }).then(({email}) => {
    //     this.Employee = new Employee(email);
    // })
    // .catch( (err) => {
    //     if(err) {
    //         console.log(err);
    //     } 
    //     return 'Done!';
    // })
    // )




module.exports = Employee;