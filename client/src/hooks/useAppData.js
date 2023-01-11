// ----NOT CURRENTLY IN USE----

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function useAppData() {
//   const [state, setState] = useState({
//     users: {},
//     sports: {},
//     user_sports: {},
//     matches: [],
//     reviews: {},
//   });

//   useEffect(() => {
//     Promise.all([
//       axios.get("/api/users"),
//       axios.get("/api/sports"),
//       axios.get("/api/user_sports"),
//       axios.get("/api/matches"),
//       axios.get("/api/reviews"),
//     ]).then((all) => {
//       setState((prev) => ({
//         ...prev,
//         users: all[0].data,
//         sports: all[1].data,
//         user_sports: all[2].data,
//         matches: all[3].data,
//         reviews: all[4].data,
//       }));
//     });
//   }, []);

//   return {
//     state,
//   };
// }
