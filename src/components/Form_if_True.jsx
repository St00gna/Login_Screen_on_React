import React from "react";

function Form_if_True() {
  return (
    <div className="container">
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Form_if_True;
