// const express = require('express')
// const app = express()
// const port = 3000

// var needle = require('needle');

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// const Vulnerability1 = (req, res) => {
    
//     needle.get('http://www.google.com', function(error, response) {
//         if (!error && response.statusCode == 200)
//             console.log(response.body);
//         res.end();
//     });

// }
    
// const Vulnerability2 = (req, res) => {
//     needle('put', 'https://hacking.the.gibson/login', { state: 'god' }, { json: true })
//     .then(function(response) {
//         // doSomethingWith(response)
//         res.end();
//     })
//     .catch(function(err) {
//         console.log('Call the locksmith!')
//         res.end();
//     })
// }

// app.get('/vuln1', Vulnerability1);
// app.get('/vuln2', Vulnerability2);
