// 2. install a 3rd-party module (e.g. axios) using npm. Import and use this module to make a network request in a script.

// npm install axios

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    console.log(response.data);
})
.catch(error=>{
    console.error('Error fetching data:', error);

});


// run : node Task 2.0.js

// op:
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }
  