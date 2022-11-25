import '../App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Application = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [externalUrl, setExternalUrl] = useState("");
    const [cover_letter, setCoverLetter] = useState("");
    const [appStatus, setAppStatus] = useState("");
    // const [appled, setAppliedStatus] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/user", {
                method: "POST",
                headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                externalUrl: externalUrl,
                cover_letter: cover_letter,
                kind: "applicant"
                }),
            });

            let resJson = res.json();
            if (res.status === 200) {
                setFirstName("");
                setLastName("");
                setEmail("");
                setAppStatus("Pending Review"); // need to set the app status on initial here


            // pass applied state to local storage
            // used to control when the applicant gets the applications
            // for the role being applied for
            localStorage.setItem('engineerng_role.applied', true);

            // ok to default to this since the applicant
            // is the only one who sees this component
            localStorage.setItem('kind', 'applicant');

            // navigate to thanks for applying
            navigate('/thankyou', {state: {role: 'Senior Software Engineer', status: "Pending Review"}});
        } else {
            setAppStatus("App Status is not available");
        }
        } catch (err) {
        console.log(err);
        }
    };

    return (
        <div className="wrapper" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
          }}>
            <form onSubmit={handleSubmit}>
              <h1>Enter info to apply for Software engineer</h1>
              <fieldset style={{padding: '50px'}}>
                <label>
                  First Name:
                  <input type="text" value={firstName} placeholder="firstName" onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                  Last Name:
                  <input type="text" value={lastName} placeholder="lastName" onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                  Email:
                  <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                  Linked Profile:
                  <input type="text" value={externalUrl} placeholder="" onChange={(e) => setExternalUrl(e.target.value)} />
                </label>
                <label>
                  Cover Letter <i>(optional):</i>
                  <textarea type="text" value={cover_letter} placeholder="" onChange={(e) => setCoverLetter(e.target.value)} />
                </label>
                {/*
                <label>
                  Upload Resume:
                  <input type="text"  onChange={handleChange} />
                </label>
                */}
              </fieldset>
              <input type="submit" value="Submit" />
            </form>
          </div>
    );
};

export default Application;