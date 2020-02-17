const express = require('express')
const app = express()
const port = 3000

var needle = require('needle');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const Vulnerability1 = (req, res) => {
    var url = req.query['url'];
    needle.get(url, { timeout: 3000 }, function(error, response1) {
        if (!error && response1.statusCode == 200) {
            res.write(response1.body);
            res.end();
        } else {
            res.end();
            console.log('error')
        }
    });
}
    
const Vulnerability2 = (req, res) => {
    needle('put', req.query['url'], { state: 'god' }, { json: true })
    .then(function(response) {
        // doSomethingWith(response)
        res.end();
    })
    .catch(function(err) {
        console.log('Call the locksmith!')
        res.end();
    })
}

app.get('/vuln1', Vulnerability1);
app.get('/vuln2', Vulnerability2);
