import React from "react";

function EmployeeCard({ image, name, department, email, phone }) {
  return (
    <div className="justify-between">
      <img
        style={{ maxWidth: "60px" }}
        className=""
        src={image}
        alt="employee"
      />
      <span>
        <p>{department}</p>
      </span>
      <span>
        <p className="">{email}</p>
      </span>
      <span>
        <p>{phone}</p>
      </span>
    </div>
  );
}

export default EmployeeCard;
