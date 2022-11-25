import { Navigate, useLocation } from "react-router-dom";
import Application from "./application";
import Employee from './employee';
import Manager from './manager';
import '../App.css';

const Dashboard = () => {
  const renderComponent = (Component, data) => {
    return (
      <div className="wrapper">
        <p>Welcome to your Dashboard</p>
         <Component value={data}/>
      </div>
    );
  }

  let alreadyApplied = localStorage.getItem("engineerng_role.applied");
  let kind = localStorage.getItem("kind");

  if (!localStorage.getItem("user_id")) {
    // Redirect
    return <Navigate replace to="/login" />;
  } else {
    // applicant already applied
    if(kind === "applicant" && alreadyApplied === "true"){
      // render application if user
      return renderComponent(Employee, localStorage.getItem("user_id"));
    }
    
    // applicant has not applied yet
    if(kind === "applicant" && alreadyApplied !== "true"){
      return renderComponent(Application, localStorage.getItem("user_id"));
    }

    // this is the manager -- just default to a status for now
    // it is either all or specific application status
    return renderComponent(Manager, "Pending Review");
  }
};
export default Dashboard;