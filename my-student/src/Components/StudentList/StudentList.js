import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../JS/Action/Etudiant';
import { Helmet } from 'react-helmet';
import { Spinner, Table } from 'react-bootstrap'; // Utilisation du composant Table de react-bootstrap
import StudentTableRow from '../StudentTableRow/StudentTableRow'; // Création d'un nouveau composant pour chaque ligne du tableau

const StudentList = () => {
  const dispatch = useDispatch();
  const listStudents = useSelector(state => state.studentReducer.listStudents);
  const load = useSelector(state => state.studentReducer.load);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <meta charSet='utf_8' />
        <title>studentlist</title>
        <link rel='canonical' />
      </Helmet>
      <h1>STUDENT LIST</h1>
      {load ? (
        <Spinner animation='border' />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              {/* Ajoutez d'autres colonnes au besoin */}
            </tr>
          </thead>
          <tbody>
            {listStudents.map((student) => (
              <StudentTableRow key={student._id} student={student} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default StudentList;
