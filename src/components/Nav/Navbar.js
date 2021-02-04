import React from "react";
import "./style.css";

function Navbar({ sortData, filterByDept }) {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="btn-group" role="group">
            <button
              onClick={() => sortData("first_name")}
              type="button"
              className="btn btn-success"
            >
              Sort by First Name
            </button>
            <button
              onClick={() => sortData("last_name")}
              type="button"
              className="btn btn-primary"
            >
              Sort by Last Name
            </button>
            <button
              onClick={() => sortData("email")}
              type="button"
              className="btn btn-info"
            >
              Sort by Email
            </button>
            <button
              onClick={() => sortData("phone")}
              type="button"
              className="btn btn-warning"
            >
              Sort by Phone
            </button>
          </div>

          <select
            onChange={filterByDept}
            className="filter-dept-select form-select-lg"
            aria-label="filter-Dept-Label"
          >
            <option selected>Filter by Department</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Executive">Executive</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Operations">Operations</option>
            <option value="Payroll">Payroll</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
