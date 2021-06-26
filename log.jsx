import React from "react"


const AppLogin  = () => {
    return ( <div className="container">
        <form>
        <h3 className="bold">Log In</h3>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <br></br>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check box</label>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>);
}
 
export default AppLogin;