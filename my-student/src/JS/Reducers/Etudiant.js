import { FAIL_STUDENTS,GET_STUDENT,GET_STUDENTS,LOAD_STUDENTS } from "../ActionTypes/Etudiant";

const initialState={
    listStudents:[],
    errors:null,
    load:false,
    studentToGet:{},
};

const studentReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case LOAD_STUDENTS:
            return{...state,load:true};
        case GET_STUDENTS:
            return{...state,load:false,listStudents:payload.listStudents};
    
            case GET_STUDENT:
            return{...state,load:false,studentToGet:payload.studentToGet}; 
        
            case FAIL_STUDENTS:
            return{...state,load:false,errors:payload};
            default:
                return state;      
    }
    };
    export default studentReducer;
    
