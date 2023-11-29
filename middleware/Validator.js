const {check ,validationResult}=require("express-validator");


exports.StudentValidation=()=>[
    check("firstname","firstname is required !! ").not().isEmpty(),
    check("lastname","lastname is required !! ").not().isEmpty(),
    check("age","enter age").isLength({min:1})
]

exports.validation = (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors :errors.array()})
    }
    next()
}