const url = "https://reqres.in/api/users";
const jsontest = "http://time.jsontest.com";
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
const placeholder = "https://jsonplaceholder.typicode.com/todos";
const uri ="http://httpstat.us/200";

fetch(placeholder)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
  })
  .catch((error) => console.error(error));

const fetchData = async () => {
  try {
    const response = await fetch(placeholder);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();



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

async function asyncFuncExam() {
  let resolvedValue = await myPromiseOne();
  console.log(resolvedValue);
  return resolvedValue;
}

console.log(asyncFuncExam());

asyncFuncExam().then((res) => {
  return console.log(res);
});



let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hey, I resolved!");
    }, 1000);
  });
};

async function noAwait() {
  let value = myPromise();
  console.log(value);
}

async function yesAwait() {
  let value = await myPromise();
  console.log(value);
}

noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Hey, I resolved!
console.log(noAwait());
console.log(yesAwait());

setTimeout(function timeout() {
  console.log("Timed out!");
}, 0);
Promise.resolve(1).then(function resolve() {
  console.log("Resolved!");
});
// logs 'Resolved!'
// logs 'Timed out!'

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  let result = await promise; // wait until the promise resolves (*)
  console.log(result); // "done!"
}

f();

function returnpromise(val) {
  return new Promise((resolve, reject) => {
    if (val > 5) {
      resolve("resolved"); // fulfilled
    } else {
      reject("rejected from promise"); // rejected
    }
  });
}

//This is how you handle errors in await
async function apicall() {
  try {
    console.log(await returnpromise(5));
  } catch (error) {
    console.log(error);
  }
}

async function apicall2() {
  let data = await returnpromise(3).catch((error) => {
    console.log(error);
  });
  console.log(data);
}
async function apicall3() {
  try {
    let data = await returnpromise(3).catch((error) => {
      console.log(error);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

apicall();
apicall2();
apicall3();

async function newExample(param) {
  let value = param;
  return value;
}
async function resultOfFunc() {
  const result = await newExample(5);
  console.log(result);
  return result;
}
console.log(resultOfFunc());

function choice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you choose?"));
    }, 3000);
  });
}

async function topic() {
  console.log("A");
  console.log("B");
  console.log("C");

  await choice();

  console.log("D");
  console.log("E");
}

// Trigger the function

topic();


let myNewPromise = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

async function asyncFunctionOne() {
  let value = await myNewPromise("elma");
  console.log(value);
  return value;
}

async function asyncFunctionTwo(elma) {
  let value = await myNewPromise(elma);
  console.log(value);
  return value;
}

function nativePromiseVersion() {
  asyncFunctionOne()
  .then((firstValue) => {
      console.log("firstValue==>", firstValue);
      return asyncFunctionTwo(firstValue);
  })
 .then((secondValue) => {
      console.log("secondValue==>", secondValue);
  });
}
nativePromiseVersion()


