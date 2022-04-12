const readline = require('readline');

class ReadLine {
  readLine;

  constructor() {
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.readLine.on('close', function () {
      console.log('GRACIAS');
      process.exit(0);
    });
  }

  get readLine() {
    return readLine;
  }

  set readLine(readLine) {
    this.readLine = readLine;
  }
}

module.exports.ReadLine = ReadLine;
