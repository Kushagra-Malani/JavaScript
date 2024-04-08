const promiseOne = new Promise(function(resolve,reject){
    // Do an async task like: DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async Task completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed"); // '.then' directly connects to 'resolve'
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Kushagra", email: "kushagra@example.com"}) //passing an object in resolve
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(error == false){
            resolve({username: "Hitesh", password: "123"}) //passing an object in resolve
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.password // user.password is returned to the next .then
}).then((myPassword)=>{ // myPassword contains user.password
    console.log(myPassword);
}).catch((error)=>{  // when error = true then catch is executed
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error == false){
            resolve({username: "JavaScript", password: "123"}) //passing an object in resolve
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})
// async & await do the same thing as .then & .catch
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // converting response which is a string to json
        console.log(data);
    } catch (error) {
        console.log("Error: ",error);
    }
}
getAllUsers()
*/

// Writing the above function of 'getAllUsers' by using .then & .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})