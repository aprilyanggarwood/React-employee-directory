import React, { useState, useEffect } from "react";
import Navbar from "./components/Nav/Navbar";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import EmployeeCardList from "./components/EmployeeCardList";
// import employeesData from "./data/employees.json";

import Loader from "./components/Loader/Loader";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState({ employeesData: [] });
  const [filterDept, setFilterDept] = useState("");
  const [modifier, setModifier] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=1000&nat=us")
      .then(({ data }) => {
        console.log(data.results);
        const mappedData = data.results.map((a) => ({
          ...a,
          first_name: a.name.first,
          last_name: a.name.last,
          image: a.picture.large,
        }));
        setEmployees({ employeesData: mappedData });
        setLoading(false);
      });
  }, []);
  function sortUsers(key) {
    let sortEmployees = employees.employeesData.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      return aVal < bVal ? -1 * modifier : aVal > bVal ? 1 * modifier : 0;
    });
    setModifier(-modifier);
    setEmployees({ employeesData: sortEmployees });
  }

  // function sortFirstName() {
  //   let sortEmployees = [...employees].sort((a, b) => {
  //     let fa = a.last_name.toLowerCase(),
  //       fb = b.last_name.toLowerCase();

  //     if (fa < fb) {
  //       return -1;
  //     }
  //     if (fa > fb) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   setEmployees(sortEmployees);
  // }

  // function sortLastName() {
  //   let sortEmployees = [...employees].sort((a, b) => {
  //     let fa = a.last_name.toLowerCase(),
  //       fb = b.last_name.toLowerCase();

  //     if (fa < fb) {
  //       return -1;
  //     }
  //     if (fa > fb) {
  //       return 1;
  //     }
  //     return 0;
  //   });

  //   setEmployees(sortEmployees);
  // }

  const filterByDept = (event) => {
    let filterEmployees = employees.employeesData.filter((employee) => {
      return employee.department === event.target.value;
    });

    setEmployees({ employeesData: filterEmployees });
    setFilterDept(event.target.value);
  };

  return (
    <div>
      {loading && <Loader />}
      <Container>
        <div className="jumbotron">
          <h1 className="title">Employee Directory</h1>
        </div>
        <Navbar sortData={sortUsers} filterByDept={filterByDept} />
        <EmployeeCardList employees={employees.employeesData} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
