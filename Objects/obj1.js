// console.log("Objects , Singleton");
// Singleton : literals ke taraah toh nahi banta hai

//object liteerals
//Object.create : constructor
const JsUser = {
    name: "Amit",
    age: 20,
    location : "Patna",
    email: "raj381289@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(JsUser["lastLoginDays"])
