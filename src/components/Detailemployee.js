import React from "react";
import { useParams } from "react-router-dom";
import { employees } from "./employeesData";

const Detailemployee = () => {
  const { employeeId } = useParams();
  const thisEmployee = employees.find((item) => item.id === employeeId);

  return (
    <div>
      <h1>{thisEmployee.id}</h1>
      <p>{thisEmployee.name}</p>
      <p>{thisEmployee.age}</p>
    </div>
  );
};
export default Detailemployee;
