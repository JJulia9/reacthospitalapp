// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const DepartmentData = () => {
//   const [departments, setDepartments] = useState(null);

//   useEffect(() => {
//     const fetchDepartmentData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/departments');
//         if (response && response.data) {
//           setDepartments(response.data);
//         } else {
//           console.error('Invalid response from the server:', response);
//         }
//       } catch (error) {
//         console.error('Error fetching department data:', error);
//       }
//     };

//     fetchDepartmentData();
//   }, []);

//   return departments;
// };

// export default DepartmentData;
