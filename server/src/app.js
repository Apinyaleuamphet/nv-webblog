let express = require('express')
const app = express()

app.get('/status', function (req, res ){
  res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
  console.log('hello - ' + req.params.person)
  res.send('sey hello with ' + req.params.person)
})


let port = 8081

app.listen(port,function(){
  console.log('Server running on ' + port)
})
