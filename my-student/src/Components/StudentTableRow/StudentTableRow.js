import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { deleteStudent } from "../../JS/Action/Etudiant";
import { useDispatch } from "react-redux";

const StudentTableRow = ({ student }) => {
  const dispatch=useDispatch()
  return (
    <tr>
      <td>{student._id}</td>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.age}</td>
      <td>
        <LinkContainer to={`/edit/${student._id}`}>
          <Button> Edit </Button>
        </LinkContainer>
      </td>
      <td>
        <Button variant="danger" onClick={()=>dispatch(deleteStudent(student._id))} >
         Delete
        </Button>
       
      </td>

      {/* Ajoutez d'autres colonnes au besoin */}
    </tr>
  );
};

export default StudentTableRow;
