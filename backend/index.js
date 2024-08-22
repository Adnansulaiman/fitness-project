const port = 4000;
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
    res.send("Express App is running");
});

// Image Storage Engines
const trainerStorage = multer.diskStorage({
    destination: './upload/images/trainers',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const trainingStorage = multer.diskStorage({
    destination: './upload/images/training',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Creating multer instances for each type of upload
const uploadTrainerImage = multer({ storage: trainerStorage });
const uploadTrainingImage = multer({ storage: trainingStorage });

// Creating Upload Endpoints for images
app.use('/images/trainers', express.static('upload/images/trainers'));
app.use('/images/training', express.static('upload/images/training'));

app.post('/upload/trainer', uploadTrainerImage.single('trainerImage'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/trainers/${req.file.filename}`
    });
});

app.post('/upload/training', uploadTrainingImage.single('trainingImage'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/training/${req.file.filename}`
    });
});



// MongoDB code //
// Database connect with MongoDB
mongoose.connect("mongodb+srv://fitnessxyz00:fitness@cluster0.vuvlzyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    
   
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error("Error while connecting to MongoDB:", error);
});

db.once('open', () => {
    console.log("Connected to MongoDB successfully");
});

// Schema for Creating Trainer

const Trainers = mongoose.model("Trainers",{
    
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
       
    },
    
    workplace:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    
    contactNumber:{
        type:Number,
        required:true
    }
})



// Schema for Creating Training

const Training = mongoose.model("Training",{
    
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    
    time:{
        type:Number,
        required:true
    },
    repeat:{
        type:Number,
        required:true
    },
    
    category:{
        type:String,
        required:true
    }
})

//Schema creating for User model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    

})

// MongoDB code end  //


// Frontend Endpoints //


//Creating endpoint for user signup

app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with this email "})
    }

    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })

    await user.save();
    const data = {
        user:{
            id:user._id
        }
    }

    const token = jwt.sign(data,'secret_fitness');
    res.json({success:true,token})
})

//Creating endpoint for user login
app.post('/login',async (req,res) =>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data={
                user:{
                    id:user._id
                }
            }
            const token = jwt.sign(data,'secret_fitness');
            res.json({success:true,token})
        }else{
            res.json({success:false,error:"Wrong Password"})
        }
    }else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})


// Creating endpoint for add trainers data
app.post('/addtrainers',async (req,res)=>{
    
    
    const trainer = new Trainers({
        
        name:req.body.name,
        workplace:req.body.workplace,
        place:req.body.place,
        contactNumber:req.body.contactNumber,
        image:req.body.image,
        
    })
    console.log(trainer);
    await trainer.save();
    console.log("Saved trainers data");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating endpoint for add trainers data
app.post('/addtraining',async (req,res)=>{
    
    
    const training = new Training({
        
        name:req.body.name,
        time:req.body.time,
        repeat:req.body.repeat,
        category:req.body.category,
        image:req.body.image,
        
    })
    console.log(training);
    await training.save();
    console.log("Saved training data");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating API for deleting trainers data
app.post('/removetrainers',async (req,res)=>{
    
    await Trainers.findOneAndDelete({_id:req.body._id})
    console.log("Removed trainers data");
    res.json({
        success:true,
        name:req.body.name
    })
})

//Creating API for deleting training data
app.post('/removetraining',async (req,res)=>{
    
    await Training.findOneAndDelete({_id:req.body._id})
    console.log("Removed training data");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Creating API for getting all trainers
app.get('/alltrainers',async (req,res)=>{
    let trainers = await Trainers.find({});
    console.log("All trainers fetched");
    res.json(trainers)
})

// Creating API for getting all training
app.get('/alltraining',async (req,res)=>{
    let training = await Training.find({});
    console.log("All training fetched");
    res.json(training)
})

// Creating API for getting all users
app.get('/allusers',async (req,res)=>{
    let users = await Users.find({});
    console.log("All users fetched");
    res.json(users)
})





