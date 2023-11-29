const express =require('express');
const Student = require("../models/Etudiant");
const router =express.Router();

router.get('/test',(req, res) => {
    res.send('Hello world!');
});

//add student

router.post('/add',async(req, res) => {
    console.log(req.body)
    try{
        const {firstName,lastName,age}=req.body;
        const newStudent = new Student({firstName,lastName,age})
        await newStudent.save();
        res.status(200).send(
            {msg:'student was successfully added',newStudent}
        )
    }
    catch(err){
        res.status(400).send({msg:'this student can not be added'})
    }
})


// get all students

router.get('/all',async(req,res)=>{
    try{
        const listStudents=await Students.find();
        res.status(200).send({msg:'student list',listStudents})
    }
    catch(err){
        res.status(400).send({msg:'can not find the student list'})
}
})

        //get one student

        router.get('/:_id', async(req,res)=>{
            try{
        const studentToGet = await Student.findOne({_id:req.params._id})
        res.status(200).send({msg:'student getted' ,studentToGet})
    }
            catch(error){
        res.status(400).send({msg:'can not find this student'})
    }
})

// remove student 

router.delete('/:_id',async(req,res)=>{
    try{
        const {_id}=req.params;
        await Student.findOneAndDelete({_id})
        res.status(200).send({msg:'student deleted'})
    }
    catch (error){
        res.status(400).send({msg:'can not delete the student'})}
    })


    //Update student

    router.put('/:_id',async(req,res)=>{
        try{
            const{_id}=req.params;
            const updateStudent = await Student.updateOne({_id},{$set:{...req.body}})
            res.status(200).send({msg:'Student is updated'})
        }
        catch (error){
            res.status(400).send({msg:'can not update this Student'})
        }
    })



module.exports=router;