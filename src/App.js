import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

function App() {
  //state hook gives reference to setState which is later referenced
  const [state, setState] = React.useState({
    base: [],
    employees: [],
  });

  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log(response.data.results);

        const mapped = response.data.results.map((emp) => ({
          img: emp.picture.large,
          name: emp.name.first + " " + emp.name.last,
          email: emp.email,
          dob: emp.dob.date,
          location: emp.location.city + ", " + emp.location.state,
        }));

        console.log(mapped);

        setState({
          employees: mapped,
          base: mapped,
        });
      })
      .catch((error) => console.warn(error.message));
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    setState({
      ...state,
      employees: state.base.filter(
        (employee) =>
          employee.name.toLowerCase().includes(searchTerm) ||
          employee.location.toLowerCase().includes(searchTerm)
      ),
    });
  };

  const sortTable = (e) => {
    const key = e.target.textContent.toLowerCase();

    setState({
      ...state,
      employees: state.employees.sort((a, b) => (a[key] > b[key] ? 1 : -1)),
    });
  };

  return (
    <div>
      <Header />
      <Search onChange={handleChange} />
      <Table employees={state.employees} sortTable={sortTable} />
    </div>
  );
}

export default App;

// console.log("\n\n\n");

// let state = {
//   name: "Ben",
// };

// const render = () => console.log(state.name);
// const setState = (obj) => {
//   state = obj;
//   render();
// };

// render();

// setState({ name: "Bob!!!" });
// setState({ name: "Stephan" });

4 > 8 ? console.log("true") : console.log("false");
