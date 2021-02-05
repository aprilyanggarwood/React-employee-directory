import React from "react";

function EmployeeCard({ image, name, department, email, phone }) {
  return (
    <div className="row">
      {/* <div class="col-md-1"></div> */}
      <div class="col-md-2">
        <img
          // style={{ maxWidth: "60px" }}
          className="image"
          src={image}
          alt="employee"
        />
      </div>
      <div class="col-md-2">
        <p className="">{name}</p>
      </div>
      <div class="col-md-2">
        <p>{department}</p>
      </div>
      <div class="col-md-3">
        <p className="">{email}</p>
      </div>
      <div class="col-md-2">
        <p>{phone}</p>
      </div>
      <div class="col-md-1 col1"></div>
    </div>
  );
}

export default EmployeeCard;
