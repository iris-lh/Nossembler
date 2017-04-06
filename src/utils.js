function cloneArray(arr) {
  var copy

  if (Array.isArray(arr)) {
    copy = arr.slice(0)
    for(var i=0;i<copy.length;i++) {
        copy[i] = cloneArray(copy[i])
    }
    return copy
  } else if (typeof arr === 'object') {
      throw 'Cannot clone array containing an object!'
  } else {
      return arr
  }
}

var utils = {

  cloneArray,


  write: (data)=> {
    this.to = (destination)=> {
      for (var i=0;i<data.length;i++) {
        destination[i] = data[i]
        if (i === destination.length -1) {
          throw(
            `ERROR: Not enough space in destination\n`+
            `Data size:        ${data.length}b\n`+
            `Destination size: ${destination.length}b`
          )
        }
      }
      return destination
    }
    return this
  },


  parseProgram: i => i.split(/\s/).filter(str => str !== ''),


  displayResults: (oldMemory, newMemory)=> {
    var oldTape = oldMemory[0]
    var newTape = newMemory[0]

    function print(tape) {
      var output = ''
      var i = 0
      var cell = tape[i]

      for (i;i<tape.length;i++) {

        var offset = 1
        var adjusted = i + offset


        if ((adjusted/64)+1 === Math.floor((adjusted/64)+1)) {
          output += tape[i] + '\n'


        } else if ((adjusted/32)+1 === Math.floor((adjusted/32)+1)) {
          output += tape[i] + '\n'


        } else if (adjusted/8 === Math.floor(adjusted/8)) {

          if (tape[i] > 9) {
            output += tape[i] + '  '
          } else {
          output += tape[i] + '   '
          }


        } else {

          if (tape[i] > 9) {
            output += tape[i] + ' '
          } else {
          output += tape[i] + '  '
          }

        }
      }
      console.log(output)
    }

    console.log('')
    console.log('INPUT:')
    print(oldTape)
    console.log('OUTPUT:')
    print(newTape)
  }
}



module.exports = utils
