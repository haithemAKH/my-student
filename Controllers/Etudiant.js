const student = require("../models/Etudiant");



exports.addStudent =async(req,res)=>{
    const {firstName, lastName, age} = req.body;

try {
    const newStudent = new student({
        firstName,
        lastName,
        age,
    })

    await newStudent.save()
    res.status(200).send({success:[{message:'étudiant est ajouter'}],newStudent})

}
catch (err) {
    res.status(400).send({msg:'étudiant n est pas ajouter',err})
}
}

exports.deleteStudent = async(req,res)=>{
    try{
        const {_id} = req.params;
        await student.findOneAndDelete({_id})
        res.status(200).send({msg:"étudiant est supprimer"})
    }
    catch(err){
        res.status(400).send({msg:"étudiant n est pas supprimer",err})
    }
}


exports.getstudents = async(req,res)=>{
    try{
        const listStudents = await student.find();
        res.status(200).send({msg:"liste d étudiants",listStudents})
    }
    catch(err){
        res.status(400).send({msg:"il n y a pas de liste d étudiants"},err)
    }
}

exports.getOneStudent = async(req,res)=>{
    const{_id}=req.params;
    try{
        const studentToGet = await student.findOne(req.params);
        res.status(200).send({msg:"trouver l étudiant",studentToGet})
    }
    catch(err){
        res.status(400)({msg:"impossible de trouver l étudiant",err})
    }
}