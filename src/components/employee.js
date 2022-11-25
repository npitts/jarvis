import { useState, useEffect } from 'react';

const Employee = (props) => {
    const [data, setData] = useState([]);

    const { value } = props;

    useEffect(()=>{
        fetch(`http://localhost:8080/api/application/info/${value}`,{
            method: 'GET',
            headers:{},
        })
        .then(async (res)=>{
            const applicantInfo = await res.json();
            setData(applicantInfo);
        })
        .catch((error)=>{
            // setData();
        });
    })

    return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Job</th>
            <th>Date applied</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(app => {
            return <tr>
              <td>{app.id}</td>
              <td>{app.job_id}</td>
              <td>{app.createdAt}</td>
              <td>{app.status}</td>
            </tr>
          })}
        </tbody>
     </table>
    </div>
    );
};

export default Employee;