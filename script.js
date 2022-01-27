/*
const myPromiseOne = () =>
  new Promise((resolve, reject) => {
    const lessons = ["HTML", "CSS", "JS"];
    const finded = lessons.filter((element) => element === "JS");

    if (finded.length > 0) {
      resolve(finded);
    } else {
      reject("i dont know JS yet");
    }
  });

  // async function multiply(params) {
  //   return params * 4 ;
  // }
  // //console.log(multiply(5));

  // multiply(5).then(res=>console.log(res))

  function example() {
    let response = myPromiseOne();
    console.log(response)
    return response;
  }
  example().then(res=>console.log(res))

  async function newExam() {
    myPromiseOne().then(res=>console.log(res))
    let response = await myPromiseOne();
    console.log(response)
    //return response;
  }
  newExam();

const myPromise = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Merhaba, resolved!")
    }, 1000);
  })
}

async function noWait() {
  let value = myPromise();
  console.log(value)
}
async function yesWait() {
  let value = await myPromise();
  console.log(value)
}
noWait();
yesWait();
*/

const myPromiseOne = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Merhaba, resolved!")
    }, 3000);
  })
}
const myPromise = (param) => {
  return new Promise((resolve, reject)=>{
    if(param > 5){
      resolve ("yes, resolved")
    } else {
      reject("No, rejected")
    }
  })
}

async function asyncFuncOne() {
  let response = await myPromise(6);
  console.log(response)
  let selam = await myPromiseOne();
  console.log("55");
  console.log(selam+response)
}
async function asyncFuncTwo() {
  let response = await myPromise(4).catch(err=>console.log(err))
  if(response){
    console.log(response)
  }
}
//asyncFuncOne()
//asyncFuncTwo()
/*
const placeholderURL = "https://jsonplaceholder.typicode.com/todos";
const jsonTest = "http://time.jsontest.com";

const getData = async () => {
  const data = await fetch(jsonTest)
  console.log(data)
  const response = await data.json();
  console.log(response)
}
getData();*/
/*
function choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("your selection"));
    }, 2000);
  })
}

async function selector() {
  console.log("A")
  console.log("B")
  console.log("C")
  await choice();
  console.log("D")
  console.log("E")
}
selector();
selector2();
async function selector2() {
  console.log("h")
  console.log("k")
  console.log("l")
}
*/

import {staff} from "../JS-117/staff.js";
const staffJSON = JSON.parse(staff)
const myProm = (param) => {
  return new Promise((resolve, reject)=>{
    if(param > 5){
      resolve (staffJSON);
    } else {
      reject("No, rejected")
    }
  })
}

async function asyncFunc1() {
  let response = await myProm(6);
  console.log(response.staff)
}
async function asyncFunc2() {
  let response = await myProm(4).catch(err=>console.log(err))
  if(response){
    console.log(response)
  }
}
async function asyncFunc3(params) {
  try {
    let response1 = await myProm(6);
    console.log(response1)
    let response2 = await myProm(3);
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
//asyncFunc1();
//asyncFunc2();
//asyncFunc3();

const gitURL = "https://api.github.com/users/";
const user = "huseyinbattal"
async function showAvatar() {

try {
  let response = await fetch(gitURL+user);
  if(response.status === 200){
    let data = await response.json();
    console.log(data.avatar_url)
    const img = document.createElement("img");
    img.src=data.avatar_url;
    document.body.appendChild(img);
    return data;
  } else {
    alert("birşeyler ters gitti");
  }
} catch (error) {
  if(error){
    console.log("bir şeyler bayayaaaağı ters gitti")
  }
}

}

async function showAvatar2() {
 return fetch(gitURL+user).then(response => {
    console.log(response)
    if(response.status === 200) {
      return response.json()
    } else {
      return "No data";
    }
  }).then(res=>{
    console.log(res);
    const img = document.createElement("img");
    img.src=res.avatar_url;
    document.body.appendChild(img);
    return res;
  })
}
//showAvatar();
//showAvatar2();


try {
  fetch(gitURL+user).then(response => {
    console.log(response)
    if(response.status === 200) {
      return response.json()
    } else {
      return "No data";
    }
  }).then(res=>{
    console.log(res);
    const img = document.createElement("img");
    img.src=res.avatar_url;
    document.body.appendChild(img);
  })
} catch (error) {
  if(error){
    console.log("büyük ters gitti")
  }
}