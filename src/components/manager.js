import React, { useState, useEffect, Component } from 'react';

const Manager = (props) => {
    const [pageData, setPageData] = useState([]);
    const [checked1, setChecked1] = useState('Archived');
    const [checked2, setChecked2] = useState('Pending Review');
    const [checked3, setChecked3] = useState('Ready for Interview');

    const { value } = props;

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SEBBASSION_HOST}/api/application`,{
            method: 'GET',
            headers:{},
        })
        .then(async (res)=>{
            const applicantInfo = await res.json();
            setPageData(applicantInfo);
            console.log(applicantInfo)
        })
        .catch((error)=>{});
    })

    const handleChange1 = (value, id, status) => {
       if(id) {
            setChecked1(`${status}`);
            fetch(`${process.env.REACT_APP_SEBBASSION_HOST}/api/application/status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    "status": `${ status }`,
                    "id": `${ id }`
                })
            })
            .then((data) => {})
            .catch((err) => {
                console.log('problem with updating application status');
            });
       }else{
        // de-select
        setChecked1('')
       }
    }

    const handleChange2 = (value, id, status) => {
       if(id) {
            setChecked2(`${status}`);
            fetch(`${process.env.REACT_APP_SEBBASSION_HOST}/api/application/status`, {
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "status": `${ status }`,
                    "id": `${ id }`
                })
            })
            .then((data) => {})
            .catch((err) => {
                console.log('problem with updating application status');
            });
       }else{
        // de-select
        setChecked1('')
       }
    }

    const handleChange3 = (value, id, status) => {
       if(id) {
            setChecked3(`${status}`);
            fetch(`${process.env.REACT_APP_SEBBASSION_HOST}/api/application/status`, {
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "status": `${ status }`,
                    "id": `${ id }`
                })
            })
            .then((data) => {})
            .catch((err) => {
                console.log('problem with updating application status');
            });
       }else{
        // de-select
        setChecked1('')
       }
    }

    // NOT IMPLEMENTED BUT UNCHECKS ALL BOXES,
    // BEFORE RENDER SO THE CHECKED STATE IS PROPERLY REPRESENTED
    // ON MOUNT
    const handleAllCheckedBoxes = () => {}

    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Applicant</th>
            <th>Job(Role)</th>
            <th>Archived Status</th>
            <th>Pending Status</th>
            <th>Ready Status</th>
          </tr>
        </thead>
        <tbody>
          {pageData && pageData.map(applicant => {
            return <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.user_id}</td>
              <td>{applicant.job_id}</td>
              <td><input id={`checkbox_1_${applicant.id}`} checked={ (applicant.status == checked1) }
               onChange={e => handleChange1(e.target.checked, applicant.id, applicant.status)}
               type="checkbox"
               title="Update Status"></input></td>
              <td><input id={`checkbox_2_${applicant.id}`} checked={ (applicant.status == checked2) }
               onChange={e => handleChange2(e.target.checked, applicant.id, applicant.status)}
               type="checkbox"
               title="Update Status"></input></td>
              <td><input id={`checkbox_3_${applicant.id}`} checked={ (applicant.status == checked3) }
               onChange={e => handleChange3(e.target.checked, applicant.id, applicant.status)}
               type="checkbox"
               title="Update Status"></input></td>
            </tr>
          })}
        </tbody>
     </table>
    </div>
    );
}


export default Manager;