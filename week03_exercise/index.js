var http = require("http");
//TODO - Use Employee Module here
var emp = require("./Employee")

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8085

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            const listEmps = () => {
                return emp.employees
            }
            res.write(JSON.stringify(listEmps()))  
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
             const empNames = () => {
                const fullName = emp.employees.map(employee => `${employee.firstName} ${employee.lastName}`);
                return fullName.sort();
            }
            res.write(JSON.stringify(empNames()));  
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 } 

            const empSalary = () => {
                let total = 0
                for(let i = 0; i < emp.employees.length; i++){
                    const sal =+ emp.employees[i].Salary
                    total += sal
                }
                return JSON.stringify({ total_salary: total });
            }    
            res.write(empSalary())
        }
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})