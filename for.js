// for(i=0;i<=5;i++){
//     console.log(i)
// }
// for(i=5;i>=0;i--){
//     console.log(i)
// }
// let sum=0
// for(i=1;i<=5;i++){
//     sum+=i
// }
// console.log(sum)
// let a="prabha"
// let s=""
// for (i=0;i<=a.length-1;i++){
//     s+=a[i]
// }
// console.log(s)
// let a="prabha"
// let s=""
// for(i=a.length-1;i>=0;i--){
//     s+=a[i]
// }
// console.log(s)
// let value=1
// while(value<=5){
//     console.log(value)
//     value++
// }
// let val=10
// while(val>=1){
//     console.log(val)
//     val--
// }
// let val=1
// do{
//     console.log(val)
//     val++
// }while(val<=5)
// let num=7
// do{
//     console.log(num)
//     num++
// }while(num<=6)
// let num=5
// let i=1;
// do{
//     console.log(`${num}X${i}=${num*i}`)
//     i++
// }while(i<=10)
// let arr=[10,90,20,30,40]
// for(i in arr){
//     console.log(i,arr[i])
// }
// let s=["jhansi","sowmya","gayathri","amulya","madhu"]
// for(key in s){
//     console.log(s[key])
// }
// var k={"name":"madhu",
//     "age":23,
//     "emp":"IPS"
// }
// for(key in k){
//     console.log(key,k[key])
// }
// let arr=[10,20,90,80]
// for(val of arr){
//     console.log(val)
// }
// let str="janu"
// let str2=""
// for(i of str){
//     str2+=i
// }console.log(str2)
// let obj={"name":"prabha"}
// for(i of Object.entries(obj)){
//     console.log(i)
//     console.log(i[1])
// }
// let n={"user":"rishi",
//     "age":24
// }
// for (i of Object.keys(n)){
//     console.log(i)
// }
// for (i of Object.values(n)){
//     console.log(i)
// }
// let arr=[1,2,3,4,5]
// let count=0
// for(i in arr){
//     count+=1
// }
// console.log(count)
let num=1234
let rev=0
while(num>0){
    d=num%10
    rev=rev*10+d
    num=parseInt(num/10);
}
console.log(rev)