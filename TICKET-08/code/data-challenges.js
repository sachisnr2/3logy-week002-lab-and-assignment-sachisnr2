/*
DATA STRUCTURE CHALLENGES
Arrays, Objects, Sets
*/

/* ---------------- ARRAY CHALLENGES ---------------- */

/* 1 Remove duplicates from array */
function removeDuplicates(arr){
 return [...new Set(arr)]
}

// Test
console.log(removeDuplicates([1,2,2,3,4,4,5]))


/* 2 Find second largest number */
function secondLargest(arr){
 const unique = [...new Set(arr)]
 unique.sort((a,b)=>b-a)
 return unique[1]
}

// Test
console.log(secondLargest([10,5,8,20,20,15]))


/* 3 Rotate array by N positions */
function rotateArray(arr,n){
 return arr.slice(n).concat(arr.slice(0,n))
}

// Test
console.log(rotateArray([1,2,3,4,5],2))


/* 4 Flatten nested array */
function flattenArray(arr){
 return arr.flat()
}

// Test
console.log(flattenArray([1,[2,3],[4,5]]))


/* 5 Group array items by property */
function groupBy(arr,key){
 const result={}
 arr.forEach(item=>{
  const value=item[key]
  if(!result[value]) result[value]=[]
  result[value].push(item)
 })
 return result
}

// Test
const people=[
 {name:"Ali",age:20},
 {name:"John",age:20},
 {name:"Sara",age:22}
]

console.log(groupBy(people,"age"))


/* ---------------- OBJECT CHALLENGES ---------------- */

/* 6 Count character frequency */
function charFrequency(str){
 const result={}
 for(let char of str){
  result[char]=(result[char]||0)+1
 }
 return result
}

// Test
console.log(charFrequency("hello"))


/* 7 Merge two objects */
function mergeObjects(obj1,obj2){
 return {...obj1,...obj2}
}

// Test
console.log(mergeObjects({a:1,b:2},{c:3,d:4}))


/* 8 Convert array to object */
function arrayToObject(arr){
 const obj={}
 arr.forEach((value,index)=>{
  obj[index]=value
 })
 return obj
}

// Test
console.log(arrayToObject(["a","b","c"]))


/* 9 Most common word in text */
function mostCommonWord(text){
 const words=text.toLowerCase().split(" ")
 const freq={}
 let max=0
 let result=""

 words.forEach(word=>{
  freq[word]=(freq[word]||0)+1
  if(freq[word]>max){
   max=freq[word]
   result=word
  }
 })

 return result
}

// Test
console.log(mostCommonWord("cat dog cat bird cat dog"))


/* 10 Group students by grade */
function groupStudents(students){
 const result={}
 students.forEach(student=>{
  const grade=student.grade
  if(!result[grade]) result[grade]=[]
  result[grade].push(student.name)
 })
 return result
}

// Test
const students=[
 {name:"Ali",grade:"A"},
 {name:"John",grade:"B"},
 {name:"Sara",grade:"A"}
]

console.log(groupStudents(students))


/* ---------------- SET CHALLENGES ---------------- */

/* 11 Intersection of two arrays */
function intersection(arr1,arr2){
 return [...new Set(arr1.filter(x=>arr2.includes(x)))]
}

// Test
console.log(intersection([1,2,3],[2,3,4]))


/* 12 Union of two arrays */
function union(arr1,arr2){
 return [...new Set([...arr1,...arr2])]
}

// Test
console.log(union([1,2],[2,3,4]))


/* 13 Difference of two arrays */
function difference(arr1,arr2){
 return arr1.filter(x=>!arr2.includes(x))
}

// Test
console.log(difference([1,2,3],[2]))


/* ---------------- MIXED CHALLENGES ---------------- */

/* 14 Phone book */
const phoneBook={
 contacts:[],

 add(name,number){
  this.contacts.push({name,number})
 },

 find(name){
  return this.contacts.find(c=>c.name===name)
 }
}

// Test
phoneBook.add("Ali","12345")
phoneBook.add("Sara","67890")
console.log(phoneBook.find("Sara"))


/* 15 Shopping cart */
const cart={
 items:{},

 addItem(name,qty){
  this.items[name]=(this.items[name]||0)+qty
 },

 removeItem(name){
  delete this.items[name]
 },

 showCart(){
  return this.items
 }
}

// Test
cart.addItem("Apple",2)
cart.addItem("Banana",3)
cart.addItem("Apple",1)

console.log(cart.showCart())