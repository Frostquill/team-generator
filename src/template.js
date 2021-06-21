const fs = require('fs');


function internInfo (intern) {
console.log(intern);
}






function templateInfo (employeeArr) {
console.log(employeeArr);
console.log(employeeArr[0]);
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;

}


module.exports = templateInfo;
