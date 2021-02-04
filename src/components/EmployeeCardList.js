import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList({ employees }) {
  return employees.map((employee) => (
    <EmployeeCard
      key={employee.id}
      image={employee.image}
      name={employee.first_name + " " + employee.last_name}
      department={employee.department}
      email={employee.email}
      phone={employee.phone}
    />
  ));
}

export default EmployeeCardList;
