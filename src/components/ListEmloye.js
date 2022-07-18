import React from "react";
import { useLocation } from "react-router-dom";
import { employees } from "./employeesData";
import { Link } from "react-router-dom";
export default function ListEmloye() {
  let { state } = useLocation();
  const employee = employees.map((item) => {
    return (
      <div key={item.id}>
        <h3>
          <button>
            <Link to={`/detailemployee/${item.id}`}> {item.name} </Link>
          </button>
        </h3>
        <hr />
      </div>
    );
  });
  return (
    <div>
      <h1>Hello {state.userID}</h1>
      <div>{employee}</div>
    </div>
  );
}
