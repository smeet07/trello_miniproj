// var url = 'http://localhost:8000/auth';
// fetch(url).then((response) => response.json())
//           .then(function(data) { /* do stuff with your JSON data */})
//           .catch((error) => console.log(error));
// async function postData(url = '', data = {}) {
//   const response = await fetch(url, {
//     method: 'POST', 
//     mode: 'cors', 
//     cache: 'no-cache', 
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
    
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   console.log('k '+data);
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('http://localhost:8000/user', {username:"ishita",password:"test",error:""})
//   .then(data => {
//     console.log({username:this.state.username,password:this.state.password,error:this.state.error});
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
    
export const CallsContact = [
  {
    id: 1,
    name: 'Wangdu Mehta',
    type: 'Student',
    avatar: 'https://image.flaticon.com/icons/png/128/3011/3011270.png',
  },
  {
    id: 2,
    name: 'Minsu Puran',
    type: 'Student',
    avatar: 'https://image.flaticon.com/icons/png/128/3003/3003035.png',
  },
  {
    id: 1,
    name: 'Chintu',
    type: 'Hacker',
    avatar: 'https://image.flaticon.com/icons/png/128/924/924874.png',
  },
  {
    id: 2,
    name: 'Daisy Ali',
    type: 'Teacher',
    avatar:
      'https://img-premium.flaticon.com/png/128/2215/premium/2215059.png?token=exp=1624191263~hmac=d5b16463ceeb636e25b99600973a3d99',
  },
  {
    id: 1,
    name: 'Malala Devi',
    type: 'Student',
    avatar: 'https://image.flaticon.com/icons/png/128/3667/3667325.png',
  },
  {
    id: 2,
    name: 'Bob The Builder',
    type: 'Student',
    avatar: 'https://image.flaticon.com/icons/png/128/4940/4940812.png',
  },
  {
    id: 2,
    name: 'Babli RUbiya',
    type: 'Staff',
    avatar: 'https://image.flaticon.com/icons/png/128/219/219969.png',
  },
];
