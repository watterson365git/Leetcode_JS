var fs = require("fs");

var file;
fs.readdir('./aa', function(err, files) {
    if (err) {
        console.log(err);
    }else {
        console.log(files);

        file = files.map(function (n) {
            return './aa/' + n;
        });
        console.log(file[0].slice(10,));




      for (var i = 0 ; i< file.length ;i++){
          fs.rename(file[i],'./aa/'+ file[i].slice(10,), function(err) {
              if (err) {
                  console.log(err);
              }else {
                  console.log('ok')
              }
          })
      }
   }
});





















