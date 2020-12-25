// import React, { useState, useEffect } from "react";

// function FetchUser() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState("false");
//   const url = "https://dummyapi.io/data/api";
//   const app_key = "5fc006752c53233bb027b7aa";

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = () => {
//     setLoading(true);
//     fetch(`${url}/user`, {
//       headers: {
//         "app-id": app_key,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))

//       .catch(console.error);
//     setLoading(false);
//   };
//   return <div>{loading && "Loading.... "}</div>;
// }

// export default FetchUser;
