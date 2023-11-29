import React from 'react';
import './App.css';
import StudentList from './Components/StudentList/StudentList';
import StudentEdit from './Components/Edit/StudentEdit';
import Add from './Components/StudentAdd/StudentAdd';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/studentlist">Student List</Nav.Link>
            <Nav.Link href="/add">Add Student</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/studentlist' element={<StudentList/>}/>
        <Route path='/edit/:id' element={<StudentEdit/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;
