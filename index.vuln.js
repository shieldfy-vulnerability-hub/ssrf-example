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
            response.end();
            console.log('error')
        }
    });
}
    
const Vulnerability2 = (req, res) => {
    needle('put', req.query['url'], { password: 'god' }, { json: true })
    .then(function(response) {
        return doSomethingWith(response)
    })
    .catch(function(err) {
        console.log('Call the locksmith!')
    })
}

app.get('/vuln1', Vulnerability1);
app.get('/vuln2', Vulnerability2);