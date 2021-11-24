const http = require('http')
const fs = require('fs')
const port = 8080

const server = http.createServer(function(req, res) {
    res.writeHead(598,'Protected By NetFlex')
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(598, 'Protected By NetFlex')
            res.write('kebanyakan ddos tidak baik bagi kang coli')
        }else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('Protect By Tegar Gans' + error)
    } else {
        console.log('protect ' + port)
    }   
})
