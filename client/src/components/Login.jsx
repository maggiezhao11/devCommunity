import React, {useState} from "react";
import "./Login.scss";

export default function Login({userLogin}) {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

//  const validateForm = (()=> {
//     return email.length > 0 && password.length > 0;
//   });

 const handleSubmit = ((event) => {
    event.preventDefault();
  });

  const handleTyping = (event) => {
    setEmail(event.target.value);
   }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          value={email}
          placeholder="Enter email"
          onChange={handleTyping}
          />
        </div>
        {/* <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div> */}
      <button type="submit" className="btn btn-primary" onClick={()=> userLogin(email)}>Login</button>
      {/* <button type="submit" class="btn btn-primary" disabled={!validateForm()}>Submit</button> */}
      </form>
    </div>
  );
}