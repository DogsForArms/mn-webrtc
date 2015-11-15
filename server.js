
var colors = require('colors')
var PORT = 8081
var webRTC = require('webrtc.io').listen(PORT)
console.log(('Listening on '+PORT).green)
