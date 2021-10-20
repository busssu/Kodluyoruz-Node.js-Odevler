const fs = require('fs');

// CREATE FILE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('FILE SUCCESSFULLY CREATED');
});

// READ FILE
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

// UPDATE FILE
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 4000}', 'utf-8', (err, data) => {
    if (err) console.log(err);
});

// DELETE FILE

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});







