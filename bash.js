let pwd = require('./pwd.js')
//let ls = require('./ls')
//output a prompt
process.stdout.write('prompt > ');

//stdin 'data event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){
    pwd()
  //} else if (cmd === 'ls') {
    //ls
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
  }
})
