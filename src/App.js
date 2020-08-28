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
        setState({
          employees: response.data.results,
          base: response.data.results,
        });
      })
      .catch((error) => console.warn(error.message));
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value;

    setState({
      ...state,
      employees: state.base.filter((employee) =>
        employee.name.first.includes(searchTerm)
      ),
    });
  };

  return (
    <div>
      <Header />
      <Search onChange={handleChange} />
      <Table employees={state.employees} />
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
