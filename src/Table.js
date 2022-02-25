import React,{ useState} from 'react'
import StudentForm from './Form';
import jsonData from "./data.json"
const Tabledata = () => {

    const [datas,setDatas]=useState(jsonData);
            const tabRows=datas.map((info)=>{
                return(
                    <tr>
                        <td>{info.id}</td>
                        <td>{info.name}</td>
                        <td>{info.age}</td>
                        <td>{info.bloodgroup}</td>
                        <td>{info.gender}</td>
                        <td>{info.address}</td>
                    </tr>
                );
            });

            const addRows=(data)=>{
                const fullINfo=datas.length;
                data.id=fullINfo+1;
                const updateData=[...datas];
                updateData.push(data);
                setDatas(updateData);
            }

    return (
        <div>
            <table className="table table-stripped">
                <thead>
                <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Blood Group</th>
                    <th>Gender</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>{tabRows}</tbody>
            </table>
            <StudentForm func={addRows} />
        </div>
    )
}

export default Tabledata
