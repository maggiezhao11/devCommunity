import React, { useState } from "react";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const validateForm = (()=> {
    return email.length > 0 && password.length > 0;
  });

 const handleSubmit = ((event) => {
    event.preventDefault();
  });

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
      <button type="submit" class="btn btn-primary" disabled={!validateForm()}>Submit</button>
      </form>
    </div>
  );
}