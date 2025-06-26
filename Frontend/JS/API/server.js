// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact);
//     return fetch(url);
//   })
//   .catch((error) => {
//     console.log("ERROR - ", error);
//   });

// console.log("I am harshit");

// let url = "https://catfact.ninja/fact";  // Using async await

// async function getFacts() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR - ", error);
//   }
//   console.log("bye")
// }

let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () => {
    let link = await getImage()
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link)
});


async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (error) {
    console.log("ERROR - ", error);
    return "NO Image found";
  }
}





// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
//   // console.log(fact)
//   let p = document.querySelector("p");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact"; // Using axios


// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (error) {
//     console.log("ERROR - ", error);
//     return "NO fact found";
//   }
// }


