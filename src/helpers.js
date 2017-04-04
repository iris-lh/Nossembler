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

module.exports = {

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
    var oldData = oldMemory[0]
    var newData = newMemory[0]
    console.log('input: \n',JSON.stringify(oldData))
    console.log('output: \n',JSON.stringify(newData))
  }
}
