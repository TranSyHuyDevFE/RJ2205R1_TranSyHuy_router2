import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FormLogin() {
  let navigate = useNavigate();
  const acount = {
    user: "admin@gmail.com",
    pass: "letmein",
  };
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handeleSubmit = (e) => {
    if (form.user !== acount.user || form.pass !== acount.pass) {
      alert("no!");
      return;
    }
    navigate(`/employees`, { state: { userID: form.user } });
    console.log(form);
  };
  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <label>User</label>{" "}
          <input type="text" name="user" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Password</label>{" "}
          <input type="text" name="pass" onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <button onClick={(e) => handeleSubmit(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
}
