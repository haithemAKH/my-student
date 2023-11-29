import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editStudent,getStudent } from "../../JS/Action/Etudiant";

const StudentEdit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id}=useParams()
    const studentToGet = useSelector(state => state.studentReducer.studentToGet);
    const [newStudent, setNewStudent] = useState({});

    const handleChange = (e) => {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        dispatch(getStudent(id));
    }, [dispatch, id]);

    const handleEdit = () => {
        dispatch(editStudent(id, newStudent));
        navigate(-1);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', maxWidth: '700px', margin: 'auto'}}>
            <meta charSet='utf_8' />
            <title>EDIT</title>
            <link rel='canonical' />

            <Form.Label>firstName</Form.Label>
            <Form.Control type="text" placeholder={studentToGet.firstName} onChange={handleChange} name='firstName' />
            <Form.Label>lastName</Form.Label>
            <Form.Control type="text" placeholder={studentToGet.lastName} onChange={handleChange} name='lastName' />
            <Form.Label>age</Form.Label>
            <Form.Control type="text" placeholder={studentToGet.age} onChange={handleChange} name='age' />
            <Button variant="primary" onClick={handleEdit}>EDIT</Button>
        </div>
    );
};

export default StudentEdit;
