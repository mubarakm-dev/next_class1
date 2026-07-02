// string, boolean, object, array, number, null, undefined
//Typscript - string - text
// Typscript - boolean - true or false
// Typscript - object - { name: "John", age: 30 }
// Typscript - void - function does not return anything
// TypeScript - any - can be any type


let myName = "Josh"

myName = "John"

let count: number | string = 30
count = "kolu"

const arr1: Array<number> = [1, 2, 3, 4, 5]  // without using array generic "Array"
const arr2: (number | string)[] = [1, 2, 3, 4, 5] // using array generic [] 

const arr3: Array<string | number> = ["John", "Jane", "Doe"]  // without using array generic "Array"
const arr4: string[] = ["John", "Jane", "Doe"] // using array generic []

// arr1.push("kolu") // error because arr1 is of type number[]

//to insert string in arr1 we can add string to arr1 
arr1.push(6) // this is correct because arr1 is of type number[]
arr2.push("smith") // this is correct because arr2 is of type (number | string)[]

arr3.push(4)

// Tupple - is a fixed length array with different types of data
const tuple1: [string, number, boolean] = ["John", 30, true] // this is correct because tuple1 is of type [string, number, boolean]


// Object - is a collection of key-value pairs

const user:User = {
    fullName: "John Doe",
    age: 30,
    height: "6ft",  
}

// optional property - is a property that may or may not be present in an object
// in the above example, career is an optional property because it is not required to be present in the user object


const addNum =(num1: number, num2: number):string | void=>{
    const sum = num1 + num2
    console.log(sum)
    return String(sum) // this is correct because the function addNum returns a string or void

}

type User = {  // type alias - is a way to give a name to a type
    fullName: string,
    age: number,
    height: string,
    career?: string,
    car?: {
        color:string,
        engine: string,
        model: string,
        seats:number[]
    }
}

interface IUser {  // interface - is a way to define the shape of an object
    fullName: string,
    age: number,
    height: string,
    career?: string
}

const allUsers: Array<User | UserwithRole | IUserwithRole> =[
    {
        fullName: "John Doe",
        age: 30,
        height: "6ft",  
        career: "Engineer"
    },
     {
        fullName: "John Doe",
        age: 30,
        height: "6ft",  
        
    },
     {
        fullName: "John Doe",
        age: 30,
        height: "6ft",  
        career: "Engineer",
        isMarried: true
    },
     {
        fullName: "John Doe",
        age: 30,
        height: "6ft",  
        career: "Engineer",
        isAdmin: true
    }
]

type UserwithRole = User &{ // intersection type - is a way to combine two types into one
    isAdmin: boolean  
}

interface IUserwithRole extends IUser { // interface inheritance - is a way to create a new interface that inherits the properties of an existing interface
    isAdmin: boolean  
    isMarried: boolean
}

const admin: UserwithRole = {
    fullName: "John Doe",
    age: 30,
    height: "6ft",  
    career: "Engineer",
    isAdmin: true
}


// Pick - is a utility type that allows you to create a new type by picking a set of properties from an existing type

type SimpleUser = Pick<User, "fullName" | "age" | "car"> 
const simpleMe:SimpleUser ={
    fullName: "",
    age: 0
} 




// Omit - is a utility type that allows you to create a new type by omitting a set of properties from an existing type



type UserExcludingCar = Omit<User, "car" | "career"> //

const UserWithoutCar:UserExcludingCar ={
    fullName: "",
    age: 0,
    height: ""
}


// if you need less, you can use pick
// if you need more from the type, you can use omit to remove what you dont want


// type ComplexProducts = {
//       "id": number,
//       "title": string,
//       "description": string,
//       "category": string,
//       "price": number,
//       "discountPercentage": number,
//       "rating": number,
//       "stock": number,
//       "tags": string[]
//       "brand": string,
//       "sku": string,
//       "weight": number,
//       "dimensions": {
//         "width": number,
//         "height": number,
//         "depth": number
//       },
//       "warrantyInformation": string,
//       "shippingInformation": string,
//       "availabilityStatus": string,
//       "reviews": RatingsDeets[],

//       "returnPolicy": string,
//       "minimumOrderQuantity": number,
//       "meta": {
//         "createdAt": string,
//         "updatedAt": string,
//         "barcode": string,
//         "qrCode": string,
//       },
//       "thumbnail": string,
//       "images": Array<string>,
//     }
  
  
//    type RatingsDeets = {

//      "rating": number,
//         "comment": string,
//           "date": string,
//           "reviewerName": string,
//           "reviewerEmail": string

//    }