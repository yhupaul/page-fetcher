const request = require('request');
const fs = require('fs');
// const { response } = require('express');
const args = process.argv.slice(2);
const url = args[0];
const localFilePath = args[1];

const fetcher = function(url, localFilePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("Downloading failed: ", error);
      return;
    }
    fs.writeFile(localFilePath, body, (error) => {
      if (error) {
        console.log("writng to file failed: ", error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
      }
    });
  });
};

if (!url || !localFilePath) {
  console.log("Need vaild url and local file path");
} else {
fetcher(url, localFilePath);
}



// request(url, (error, response, body) => {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body);
  
  
// //  console.log(body);
//  console.log(`Downloaded and saved ${body.length} bytes to ${file}`);    
// });