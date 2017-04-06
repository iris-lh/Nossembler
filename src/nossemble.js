var cloneArray = require('./utils').cloneArray



function Nossemble(memory) {
  var newMemory = cloneArray(memory)
  var reg       = {a:0,b:0,c:0}
  var cursor    = 0
  var tape      = newMemory[0]
  var program   = newMemory[1]

  for (var i=0;i<program.length;i++) {
    var instruction = program[i]
    var address = program[i+1]
    if (0 > cursor > newMemory[0].length) {
      throw('cursor out of bounds')
    }

    switch (instruction) {

      case 'MOV':
        cursor += parseInt(program[i+1])
          if ( cursor < 0 || cursor > newMemory[0].length - 1) {
            throw('ERROR: cursor out of bounds.')
          }
        break;

      case 'LDA':
        reg.a = tape[cursor]
        break;

      case 'LDB':
        reg.b = tape[cursor]
        break;

      case 'SAV':
        tape[cursor] = reg.c
        break;

      case 'SWPA':
        var tmp=reg.a
        reg.a=r.c
        reg.c=tmp;
        break;

      case 'SWPB':
        var tmp=reg.b
        reg.b=reg.c
        reg.c=tmp;
        break;

      case 'ADD':
        reg.c = reg.a + reg.b
        break;

      case 'SUBA':
        reg.c = reg.b - reg.a
        break;

      case 'SUBB':
        reg.c = reg.a - reg.b
        break;

      case 'INC':
        reg.c++
        break;

      case 'DEC':
        reg.c--
        break;

      case 'JMP':
        i += parseInt(program[i+1])
        break;

      case 'JGZ':
        if (reg.c > 0) {
          i += parseInt(program[i+1])
        }
        break

      case 'JLZ':
        if (reg.c < 0) {
          i += parseInt(program[i+1])
        }
        break;

      case 'JEZ':
        if (reg.c === 0) {
          i += parseInt(program[i+1])
        }
        break;

      case 'JNZ':
        if (reg.c !== 0) {
          i += parseInt(program[i+1])
        }
        break;
    }
  }
  return newMemory
}



module.exports = Nossemble
