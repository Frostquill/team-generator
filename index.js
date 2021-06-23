const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const employeeArr = [];
const templateInfo = require('./src/template');

function employeeInfo() { 
return inquirer.prompt([
    {
            type: 'list',
            name: 'roleChoice',
            message: 'What position is this employee?',
            choices: ['Manager', 'Intern', 'Engineer']
    },
    {
        type: 'input',
        name: 'name',
        message:'What is your name?',
        validate: empName => {
            if(empName) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?',
        validate: empId => {
            if(empId) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
        validate: empEmail => {
            if(empEmail) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school have you attended?',
        when: answers => answers.roleChoice === 'Intern',
        validate: empSchool => {
            if(empSchool) {
                return true;
            } else {
                console.log('Please enter a school!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your github username?',
        when: answers => answers.roleChoice === 'Engineer',
        validate: empGitHub => {
        if(empGitHub) {
            return true;
        } else {
            console.log('Please enter a GitHub user name!');
            return false;
        }
    }
    },
    {
        type: 'input',
        name: 'phone',
        message: 'what is your office number?',
        when: answers => answers.roleChoice === 'Manager',
        validate: empPhone => {
        if(empPhone) {
            return true;
        } else {
            console.log('Please enter an office number!');
            return false;
        }
    }
    },
    {
        type: 'confirm',
        name: 'confirmAgain',
        message: 'would you like to add another employee?',
        default: true
    }
])
    .then(answers => {
        // const employeeArr = [];
        if(answers.roleChoice === 'Intern') {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
             employeeArr.push(intern);
            //  console.log(employeeArr);
            //  console.log(intern);
         } else if (answers.roleChoice === 'Engineer') {
            const engineer =  new Engineer(answers.name, answers.id, answers.email, answers.github);
            // console.log(new Engineer());
            employeeArr.push(engineer);
            // console.log(employeeArr);
         } else if (answers.roleChoice === 'Manager') {
           const manager = new Manager(answers.name, answers.id, answers.email, answers.phone); 
        //    console.log(manager); 
           employeeArr.push(manager);
        //    console.log(employeeArr);
         }

        if(answers.confirmAgain) {
            return employeeInfo(answers);
        } else {
            return answers;
        }
        
    });
    
}

function writeFile (template) {
    fs.writeFile('./dist/index.html', template , (err) => {
        if(err) throw err;
        console.log('File Created!');
    })
}

function initQuest() {
    employeeInfo()
    .then(() => {
       return templateInfo(employeeArr)}
    )
    .then((templateInfo) => {
        // console.log(templateInfo);
       return writeFile(templateInfo);
    })
}






initQuest();