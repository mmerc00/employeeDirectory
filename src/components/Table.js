import React from "react";
// function Table() {
//   return (
//     <div>
//       <table class="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">First</th>
//             <th scope="col">Last</th>
//             <th scope="col">OfficeNumber</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>{</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

function Table({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, i) => (
          <tr key={i + "-employee"}>
            <td>
              {employee.name.first} {employee.name.last}
            </td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
            <td>
              {employee.location.city}, {employee.location.state}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
