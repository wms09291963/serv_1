let http=require('http')
let server=http.createServer (function (req,res) {
 res.write ('I am not a teapot')
 res.end

})

server.listen(3009, function (){
    console.log ('I am a listener, not a teapot')
} )