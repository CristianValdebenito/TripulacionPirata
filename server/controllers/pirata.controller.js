const { Pirata, PirataSchema } = require("../models/pirata.model");

module.exports.createNewPirata = async(req,res)=>{

    try{
        const pirataCapitan = await Pirata.find({position:"Capitan"}).exec();
        if (pirataCapitan.length===1 && req.body.position === "Capitan"){
            res
            .status(500)
            .json({ errors: { error: { message: "Ya existe un Capitan" } } });
        }else{
            const pirata = new Pirata(req.body);
            await pirata.save();
            return res
                .json({pirata:pirata});
        }

    }catch(error){
        res.status(500).json(error);
    }
}

module.exports.findAllPiratas = (req,res) => {
    Pirata.find().sort({name:'asc'})
        .then((allPiratas)=>res.json({piratas:allPiratas}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.findOnePirata= (req,res)=>{
    Pirata.findOne({_id: req.params.id})
        .then((pirata)=>res.json({pirata:pirata}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.changeSkill = async (req,res) => {

    try {
        const pirata = await Pirata.findById(req.params.id);

        if(req.params.skill === "1"){
            pirata.skill1=!pirata.skill1;
        }
        if(req.params.skill === "2"){
            pirata.skill2=!pirata.skill2;
        }
        if(req.params.skill === "3"){
            pirata.skill3=!pirata.skill3;
        }

        await pirata.save();
            return res
                .json({pirata:pirata});

    }catch(err){
        res.status(500).json(err);
    }
}

module.exports.deletePirata = (req,res)=>{
    Pirata.deleteOne({_id: req.params.id})
    .then((result)=>res.json({resultado:result}))
    .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}