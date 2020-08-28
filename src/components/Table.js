import React from "react";
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
              <img src={employee.picture.large} alt={employee.name.first}></img>
            </td>
            <td></td>
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
