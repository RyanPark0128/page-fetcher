const fs = require('fs')
const request = require('request');
const address = process.argv.splice(2)[0]


request(address, (error, response, body) => {
  var WriteMe = fs.writeFile('mynewfile1.html', body); 
  console.log("Downloaded and saved 3261 bytes to ./index.html")
}); 
