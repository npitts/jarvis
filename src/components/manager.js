import { useState, useEffect } from 'react';

const Manager = (props) => {
    const [pageData, setPageData] = useState([]);
    const [checked1, setChecked1] = useState('');
    const [checked2, setChecked2] = useState('');
    const [checked3, setChecked3] = useState('');

    const { value } = props;

    // console.log(props)

    // todo: fix the below logic to pull all or specific status
    let url = "";
    if(value !== "all"){
        url = `http://localhost:8080/api/application`;
    }else{
        url = `http://localhost:8080/api/application`;
    }

    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            headers:{},
        })
        .then(async (res)=>{
            const applicantInfo = await res.json();
            setPageData(applicantInfo);
        })
        .catch((error)=>{
            // setData();
        });
    })

    const handleChange1 = (value, id) => {
        console.log(id)
       if(id) {
            // select
            setChecked1(`${id}`);

            fetch('http://localhost:8080/api/application/status', {
                method: "PUT",
                headers:{
                    'Content-Type':"application/json"
                },
                body:{
                    "status": `${ value }`,
                    "id": `${ id }`
                }
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

    const handleChange2 = (value, id) => {
        console.log(id)
       if(id) {
            // select
            setChecked2(`${id}`);

            fetch('http://localhost:8080/api/application/status', {
                method: "PUT",
                headers:{
                    'Content-Type':"application/json"
                },
                body:{
                    "status": `${ value }`,
                    "id": `${ id }`
                }
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

    const handleChange3 = (value, id) => {
        console.log(id)
       if(id) {
            // select
            setChecked3(`${id}`);

            fetch('http://localhost:8080/api/application/status', {
                method: "PUT",
                headers:{
                    'Content-Type':"application/json"
                },
                body:{
                    "status": `${ value }`,
                    "id": `${ id }`
                }
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
              <td><input id={`checkbox_1_${applicant.id}`} checked={ (applicant.id == checked1) }
               onChange={e => handleChange1(e.target.checked, applicant.id)}
               type="checkbox"
               title="Update Status"></input></td>
              <td><input id={`checkbox_2_${applicant.id}`} checked={ (applicant.id == checked2) }
               onChange={e => handleChange2(e.target.checked, applicant.id)}
               type="checkbox"
               title="Update Status"></input></td>
              <td><input id={`checkbox_3_${applicant.id}`} checked={ (applicant.id == checked3) }
               onChange={e => handleChange3(e.target.checked, applicant.id)}
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