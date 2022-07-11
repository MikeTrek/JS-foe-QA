// //EX1: 
// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//   async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   }

//   async function demoGithubUser() {
//       while(true) {
//       let name = prompt("Enter a name?", "iliakan");
//       try {
//         let user = await loadJson(`https://api.github.com/users/${name}`);
//         alert(`Full name: ${user.name}.`);
//         return user;
//         } catch(err) {
//         if (err instanceof HttpError && err.response.status == 404) {
//             alert("No such user, please reenter.");
//         } else {
//           throw err;
//         }
//       }
//     }
//   }
//   demoGithubUser();

// //EX2:
// const fs = require('fs');
// const util = require("util");
// let readFile = util.promisify(fs.readFile);
// let writeFile = util.promisify(fs.writeFile);
// let exists = util.promisify(fs.exists);
// let unlink = util.promisify(fs.unlink);
// const {promisify} = require('util');
// const setAsyncTimeout = promisify(setTimeout);
// (async() =>  {   
//       const result = await readFile('./data/1.json', 'utf8');
//       await writeFile('./data/NEW.json', result);
//       console.log('new file created');
//      (async() => {
//         await setAsyncTimeout(2000);
//         if (await exists('./data/NEW.json')) {
//             await unlink('./data/NEW.json', (err) => {
//                 if (err) {
//                 console.log(err);
//                 }
//             console.log('deleted');
//             })
//         }
//       })();
//    }
// )();

//EX2.1:
const fs = require('fs')
function readFile(file1) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file1, 'utf8', function (err, dataDemo1) {
            if (err)
                reject(err);
            else
                resolve(dataDemo1);
        });
    });
}
function writeFile(file2) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(file2, 'utf8', function(err) {
        if (err)
          reject(err);
        else
            resolve("Promise Success!");
      });
     
    });
  }
function unlinkFile(file2) {
    return new Promise(function(resolve, reject) {
      fs.unlink(file2, function(err) {
        if (err)
          reject(err);
        else
          resolve("Pr");
      });
    });
  }
async function crudFile(file1, file2) {
    try {
       await readFile(file1)
       await writeFile(file2);
       await new Promise(resolve => setTimeout(resolve, 2000))
       await unlinkFile(file2);
    } catch (error) {
        console.error(error);
    }
}
crudFile('./data/1.json', './data/NEW.json' );