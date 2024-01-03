// let a=1
// let b=2

// function sum(){
//     console.log("sum of a+b is",a+b)
//     }
//     sum(1+2)

// let c=4
// let d=5
//     const hello=()=>{
// console.log("sum of c and d is",c+d)
//     }
//     hello(c+d)
//functions topic end

//     for(let o=0;o<10;o++){
//         if(o%2 ==0)
//         console.log(o)
//     }

// for(let i=0;i<10;i++){
//     if(i%2 !=0)
//     console.log(i)
// }

// for(let i=80;i>7;i=i-8){
// console.log(i)
// }

// for(let i=0;i<10;i++){
//     console.log("Hello world")
// }

// let i=10
// while(i>=10){
//     console.log("Hello World")
//     i--
// }

// let j=0
// do{
// console.log("Hello World")
// j++
// }
// while(j>10)

// let animal={
//     name:"cat",
//     legs:4

// }

// for(let key in animal){
//     console.log(key,animal[key])
// }

// let names=["javeriya","aaqib","daniyal","faiza","dawood","asjad"]
// for(let index in names){
//     console.log(index,names[index])
// }

// for(let name of names){
//     console.log(name)
// }
//loops topic end

// let f=prompt("what's your age")
// f=Number.parseInt(f)
// console.log(typeof f)
// if(f<0){
//     alert("this is an invalid age")
// }
// else if(f<9){
//     alert("you can't even think of driving")

// }
// else if(f>18){
//     alert("you are able to driving")

// }
// else{
//     alert("this is an invalid age")
// }
// console.log("done")

// console.log("you can",f<18?"not drive":"drive")
//conditional statements topic end

// let a=[1,2,3,4,false]
// console.log(a[0])

// a[6]=98
// console.log(a[0])
// console.log(a[6])
// console.log(a[0]=45)
// console.log("the length of my array is",a.length)
// console.log(typeof a)

// const names=["ali","maria","irum","ishaq"]
// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// let a=[1,2,3,4]
// let b=a.toString()
// console.log(b, typeof b)
// let c=a.join("_")
// console.log(c,typeof c)
// let r=a.pop()
// console.log(a,r)

// a.push("ali")
// console.log(a)

// a.shift()
// console.log(a)

// a.unshift("maria")
// console.log(a)

// let num=[1,2,3,4]
// console.log(num.length)
// delete num[3]
// console.log(num.length)

// let num1=[6,8,9,0]
// let num2=[1,5,4,7]
// let newArray=num1.concat(num2)
// console.log(newArray)

// let num=[1,66,88,33,55856790]
// num.sort()
// console.log(num)

// let compare=()=>{
//     return b-a
// }
// let num=[2,3,5,8]
// num.sort()
// num.reverse()
// console.log(num)

// let numsss=["paksitan","india","malysia","afghanistan"]
// numsss.splice(2,1,"indonesia","karachi")
// console.log(numsss)

// let numus=[1,44,6666,777]
// let newnumus=numus.slice(4)
// console.log(newnumus)
//array topic end

// class railwayform{
// constructor(givename,trainno){
//     console.log("constructor called"+ ""+givename+""+trainno)
//     this.name=givename
//     this.trainno=trainno

// }
// submit(){
//     alert(this.name+":your form is submitted for train:"+this.trainno)
// }
// cancel(){
//     alert(this.name+":your form is cancelled for train:"+this.trainno)

// }}

// let harryform=new railwayform("harry",55647383)
// let jonnyform=new railwayform("jonny",88388)
// harryform.submit()
// jonnyform.cancel()

// let animal={
//     eats:true
// };

// let rabbit={
//     jumps:true
// };
// rabbit._proto_=animal;

// class meri{
//     constructor(name){
//         console.log("constructor is created...")
//         this.name=name

//     }
//     eats(){
//         console.log("khaaya")
//     }
//     jumps(){
//         console.log("kooda")
//     }
// }
// class lion extends meri{
// constructor(name){
//     console.log("constructor is created...")
// super(name)
// }}
// let a=new meri("Javeriya")
// console.log(a)

// let t=new lion("Javeriya")
// console.log(t) 
//classes and objects topic end.

//async await

// async function getData(){
//     return new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve(455)
// },3500);
//     })
// }
// async function getData() {
//   //     let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   // let data=await x.json()
//   let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   let data = await x.json();
//   console.log(data);

//   return data;
// }

// async function main() {
//   console.log("jjdd");
//   console.log("kokcf");
//   let data = await getData();
//   console.log(data);
//   console.log("jjdd");
//   console.log("ddedjedjewid");
// }
// main();
//async await topic end.


//try catch topic.

// setTimeout(() => {
//     console.log("jjjd")
// }, 1000);

// try {
//     console.log(rahul)
// } catch (error) {
//     console.log("error ha")
// }

// setTimeout(() => {
//    console.log("jjdjd") 
// }, 2000);

// setTimeout(() => {
//     console.log("jdejdjd")
// }, 3000);

// setTimeout(() => {
//     console.log("jjjddfdokeo")
// }, 4000);
//try catch topic.


//error object topic.

// try {
//    console.log(Javeriya)
//    throw new ReferenceError("javeriya is not good") 
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }


//try catch checking programm

// try {
//     let age=prompt("enter your age")
//     age=Number.parseInt(age)
//     if(age>200){
// throw new ReferenceError("this is probably not true")

//     }
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }
// console.log("programm chal raha h.")


// try {
//     let age=prompt("enter your age")
//     age=Number.parseInt(age)
//     if(age<20){
//        throw new ReferenceError ("this is not true age")
//     } 

// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)

// }
// console.log("program chal raha h.")

//polymorphism wahi tha extends inheritance wali cheez tou uska code isi file main ha.


//encapsulation

class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
     introduce() {
        document.write(`hello my name is ${this.name} and I am ${this.age} years old`)
        
    }
}
const a=new person("Ali",30)
a.introduce()







