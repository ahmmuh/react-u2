// import React, { useState } from "react";
// // import SingelUser from "./SingelUser";

// function Register() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     username: "",
//   });

//   const handleChange = (event) => {
//     const value = event.target.value;
//     console.log("input value changed", event.target.value);
//     setUser({
//       ...user,
//       [event.target.name]: value,
//     });
//   };
  
//   let newUsers = {
//     name: user.name,
//     email: user.email,
//     username: user.username,
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setUser({ ...user, newUsers });
//     console.log(newUsers);
//   };
//   return (
//     <div className="register-container">
//       <form>
//         <input
//           type="text"
//           placeholder="name"
//           value={user.name}
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="username"
//           name="username"
//           value={user.username}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="email"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//         />
//         <input type="submit" value="Add" onClick={handleSubmit} />
//       </form>
//     </div>
//   );
// }

// export default Register;
