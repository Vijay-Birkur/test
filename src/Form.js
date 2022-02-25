import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const StyledButton = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

function StudentForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const changeBloodgroup = (event) => {
    setBloodgroup(event.target.value);
  };
  
  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      age,
      bloodgroup,
      gender,
      address,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setAge('');
    setBloodgroup('');
    setGender('');
    setAddress('');
  };
  
  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />
      <label>Age</label>
      <input type="text" value={age} onChange={changeAge} />
      <label>Blood Group</label>
      <input type="text" value={bloodgroup} onChange={changeBloodgroup} />
      <label>Gender</label>
      <input type="text" value={gender} onChange={changeGender} />
      <label>Address</label>
      <input type="text" value={address} onChange={changeAddress} />
      <button> Add data</button>
      <StyledButton type="submit" onClick={transferValue}>Add to Table</StyledButton>
    </div>
  );
}
  
export default StudentForm;