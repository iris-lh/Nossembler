var nossemble      = require('./src/nossemble')
var Tape           = require('./src/tape')
var utils          = require('./src/utils')
var helloWorld     = require('./sample-data/hello-world')
var exampleProgram = require('./programs/example')

var write          = utils.write
var parseProgram   = utils.parseProgram
var displayResults = utils.displayResults



var tape    = new Tape(8*16)
var program = parseProgram(exampleProgram)
var memory  = [tape, program]



// Now to ruin a perfectly good piece of binary with our base-ten digits.
displayResults(memory, nossemble(memory))
