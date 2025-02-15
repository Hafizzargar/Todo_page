// // import React from 'react'
// import axios from 'axios';
// import React, { useState ,useEffect} from 'react';

// function Home() {
//     const [todos, setTodos] = useState([]);
 

//   useEffect(() => {
//       // Fetch todos when the component mounts
//       axios
//           .get('http://localhost:5010/todo/gettodo',{ withCredentials: true })  // Add `withCredentials` to send session cookie
//           .then((response) => {
//               setTodos(response.data.data); // Store the todos in state
//               console.log(response);
              
//           },[])
//           .catch((err) => {
//               // setError('Error fetching todos');
//               console.error(err);
//           });
//   },[]);
//   return (
//     <div>

       
  
      
//     </div>
//   )
// }

// export default Home
import React from 'react'

function Home() {
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default Home

