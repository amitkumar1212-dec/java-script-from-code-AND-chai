// console.log("hello ")
// console.log("Here, in this file we learn a bout some objects methods")
// const tinderUser = new Object() // Singleton Object
// console.log(tinderUser)
const tinderUser ={}
 tinderUser.id = "123xyz";
 tinderUser.name ="JohnSnow";
 tinderUser.isLoggedIn = false;
// console.log(tinderUser);
const regularUsser = {
    email:"raj381289@gmail.com",
    fullname:{
        usersFullname:{
            firstName: "amit",
            lastname:"Jii"
        }
    }
}
// console.log(regularUsser.fullname?.usersFullname) //values 

const obj1 = {1: "a ", 2:"b"}
const obj2 ={3:"j", 4:"k"}

// const obj3= Object.assign({}, obj1, obj2) // empty object /All values are assingned 
// console.log(obj3)

const obj3 = {...obj1, ...obj2} //spread is used instead of assinged value which is {};
// console.log(obj3)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // methods to ask does have or not?
