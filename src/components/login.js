import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from '../logo.svg';

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
      localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const [user, setUser] = useState(props.user);

    const handleSubmit = (e) => {
      e.preventDefault()
      // console.log(user);
      fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(async res => {
          let r = await res.json();
          console.log(`Response from the server ${JSON.stringify(r)}`);

          // get the correct data for dashboard

          // todo: use localstorage for persisting loggedin state
          // goto to dashboard
          // user's db will be selected by kind of user being authenticated
          // let applicant = [{id:'87576hkhtrugkjuohlj', job: "sakdjksbkdnsndns", applied: "11/21/2022", status: "Pending Review"}];
          /* let applicant = [{id:'87576hkhtrugkjuohlj', user_id: "sakdjksbkdnsndns", job_id: "11/21/2022", status: "Pending Review"}];*/



          // kind && id
          localStorage.setItem('kind', r.kind);
          localStorage.setItem('user_id', r.id);
          navigate("/dashboard");

        })
        .then((json) => {
          console.log(json);
          setUser(user);
        });
    };
    return (
      <div className="wrapper" style={{display: 'flex', alignItems: 'center',
      justifyContent: 'center', height: '100vh'}}>
        {/*<img src={logo} alt="BigCo Inc. logo"/>*/}
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <input
              type="password"
              name="Password"
              placeholder="password"
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };

  export default Login;