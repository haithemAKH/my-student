import axios from "axios";
import { LOAD_STUDENTS,GET_STUDENTS,FAIL_STUDENTS,GET_STUDENT } from "../ActionTypes/Etudiant";


//get all students
export const getStudents = () => async (dispatch) => {
    dispatch({ type: LOAD_STUDENTS })
    try {
      let result = await axios.get("http://localhost:5554/api/students/all");
      console.log(result)
      dispatch({ type: GET_STUDENTS, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_STUDENTS, payload: error.response });
    }
  };

  // add students
export const addStudent = (newStudent) => async (dispatch) => {
    try {
      
      await axios.post("http://localhost:5554/api/students/add", newStudent);
      console.log()
      dispatch(getStudents());
    } catch (error) {
      dispatch({ type: FAIL_STUDENTS, payload: error.response });
    }
  };

  // delete students
export const deleteStudent = (id) => async (dispatch) => {
  console.log(id)
    try {
      await axios.delete(`http://localhost:5554/api/students/${id}`);
      dispatch(getStudents());
    } catch (error) {
      dispatch({ type: FAIL_STUDENTS, payload: error.response });
    }
  };

  // update student
export const editStudent = (id, newStudent) => async (dispatch) => {
    try {
      await axios.put(`http://localhost:5554/api/students/${id}`, newStudent)
      dispatch(getStudents());
    } catch (error) {
      dispatch({ type: FAIL_STUDENTS, payload: error.response })
    }
  };

  // get one student
export const getStudent = (id) => async (dispatch) => {
    dispatch({ type: LOAD_STUDENTS });
    try {
      let result = await axios.get(`http://localhost:5554/api/students/${id}`);
      dispatch({ type: GET_STUDENT, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_STUDENTS, payload: error.response });
    }
  };