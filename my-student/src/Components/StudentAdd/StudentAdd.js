import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";
import { addStudent } from "../../JS/Action/Etudiant";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({});

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]:e.target.value});
  };

  const handleAdd = () => {
    dispatch(addStudent(newStudent));
    navigate('/studentlist');
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', maxWidth: '700px', margin: 'auto'}}>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>AddStudent</title>
        <link rel='canonical'/>
      </Helmet>
      <h1> ADD STUDENT </h1>
      <Form.Label>firstName</Form.Label>
      <Form.Control type="text" placeholder="Enter firstName"  onChange= {handleChange} name='firstName' />
      <Form.Label>LastName</Form.Label>
      <Form.Control type="text" placeholder="Enter lastName"    onChange={handleChange} name= 'lastName' />
      <Form.Label>age</Form.Label>
      <Form.Control type="text" placeholder="Enter age"  onChange={handleChange} name='age'  />
      <Button variant="primary" onClick={handleAdd} style={{marginTop:'2cm'}}>ADD STUDENT</Button>
    </div>
  );
}

export default Add;