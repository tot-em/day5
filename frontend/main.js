let name = document.querySelector('.name')
let email = document.querySelector('.email')
let password = document.querySelector('.password')
let confirmPassword = document.querySelector('.confirm-password')
let submitBtn = document.querySelector('.submit-btn')

// Feedback loops

submitBtn.addEventListener('click', ()=> {
    if(name.value.length < 1 ||
        email.value.length < 1 || 
        password.value.length < 1 || 
        confirmPassword.value.length < 1){
        alert('Fill all inputs!!')
    }else{
        if(password.value === confirmPassword.value){

            let data = 
            {
                NAME: name.value, 
                EMAIL: email.value,  
                PASSWORD: password.value
            }

            // fetch('ip addres', {...})

            fetch('http://127.0.0.1:3000/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            
        }else{
            alert('Password does not match your confirm password')
        }
    }
})


/**
 * QUICK RUNS
 */


// OBJECTS
// let profiles = 
// {
//     user1: {
//         name: 'bob', 
//         age: 20, 
//         nationality: ['Kenyan', 'Russian']
//         }, 
//     user2: {
//         name: 'Job', 
//         age: 24, 
//         nationality: ['Ugandan']
//         }, 
//     user3: {
//         name: 'Liz', 
//         age: 18, 
//         nationality: ["American"]
//         }, 
// }

// // 1. console log all the names of the users
// // console.log(profiles["user1"]["name"])
// // console.log(profiles["user2"]["name"])
// // console.log(profiles["user3"]["name"])

// // console.log(profiles.user1.name)
// // console.log(profiles.user2.name)
// // console.log(profiles.user3.name)


// //2. console log the sum of all the ages of the users

// // console.log(profiles.user1.age + profiles.user2.age + profiles.user3.age)

// //3. list out all the countries in the profiles database

// // console.log(profiles.user1.nationality)
// // console.log(profiles.user2.nationality)
// // console.log(profiles.user3.nationality)

// //4. update liz's age to 19 then console log the whole profiles database with the updates updated
// // profiles.user3.age = 19
// // console.log(profiles)

// //5. Add a dual nationality to Job: 'Chineese' then console log the whole profiles database with the updates updated


// profiles.user2.nationality = profiles.user2.nationality.concat('Chineese');
// console.log(profiles)

