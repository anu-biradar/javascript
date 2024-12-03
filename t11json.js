// Json String
const jsonString = '{ "name" : "John" , "age" : 30 , "city" : "New York" }'

// Parsing JSON String into javascript object
const jsonObject = JSON.parse(jsonString)
console.log(jsonObject)

// Converting Javascript object to JSON String
const jsonString2 = JSON.stringify(jsonObject)
console.log(jsonString2);
