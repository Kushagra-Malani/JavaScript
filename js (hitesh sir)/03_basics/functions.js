function addTwoNum(num1, num2){
    let num3 = num1 + num2
    //console.log(num3);
    return num3
}

//addTwoNum(4,3)
const result = addTwoNum(4,3)
console.log(result);


function loginMsg(username) {
    if(username === undefined){ // instead of username === undefined we can write !username
        return "Please enter your name"
    }
    else{
        return `Hi ${username} welcome`
    }
}

console.log(loginMsg());
console.log(loginMsg("Kushagra"));