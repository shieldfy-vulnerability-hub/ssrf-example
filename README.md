# ssrf-example

## there is 2 vulnerabilities

1. ssrf in `index.vuln.js` line `11`

```js

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

```
1. ssrf in `index.vuln.js` line `23`

```js

const Vulnerability2 = (req, res) => {
    needle('put', req.query['url'], { password: 'god' }, { json: true })
    .then(function(response) {
        return doSomethingWith(response)
    })
    .catch(function(err) {
        console.log('Call the locksmith!')
    })
}


```
