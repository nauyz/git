var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

//var process = require('process');
// var child = exec('ssh -T git@github.com',{
//     encoding: "utf-8"
//   },
//   function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }
// });


var child1 = exec('ping www.baidu.com -t',{
	    encoding: "utf8"
	  },
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});

child1.stdout.


 // var child3 = exec('ssh -T git@github.com',{
	//     encoding: "utf8"
	//   },
	//   function (error, stdout, stderr) {
	//     console.log('stdout: ' + stdout);
	//     console.log('stderr: ' + stderr);
	//     if (error !== null) {
	//       console.log('exec error: ' + error);
	//     }
	// });
