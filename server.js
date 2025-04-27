const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
const Joi = require("joi");
const mongoose = require("mongoose");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

mongoose
  .connect("mongodb+srv://rg50:George521@cluster0.qq9s0li.mongodb.net/")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });

  const movieSchema = new mongoose.Schema({
    title:String,
    image1:String,
    cast:String,
    year:Number,
    rating:String,
  });


  const Movie = mongoose.model("Movie", movieSchema);

app.get("/api/movies", async(req, res)=>{
    const movies = await Movie.find();
    console.log(movies);
    res.send(movies);
})

app.post("/api/movies",  upload.single("img"), async(req,res)=>{
    const result = validateMovie(req.body);

    if(result.error){
        console.log("I have an error");
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const movie = new Movie({
        title:req.body.title,
        cast: req.body.cast,
        year: req.body.year,
        rating: req.body.rating
    });

    if(req.file){
      movie.image1 = req.file.filename;
  }

    const newMovie = await movie.save();
    res.status(200).send(newMovie);
});

app.put("/api/movies/:id" , upload.single("img"), async(req,res)=>{

    const result = validateMovie(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const fieldsToUpdate = {
        title:req.body.title,
        cast:req.body.cast,
        year:req.body.year,
        rating:req.body.rating
    }

    const wentThrough = await Movie.updateOne({_id:req.params.id},fieldsToUpdate);
    const movie = await Movie.findOne({_id:req.params.id});

    if(req.file){
      movie.main_image = req.file.filename;
  }

    res.status(200).send(movie);
});

app.delete("/api/movies/:id" ,async(req,res)=>{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).send(movie);
}); 

const validateMovie = (movie) => {
    const schema = Joi.object({
        _id:Joi.allow(""),
        title:Joi.string().required(),
        cast:Joi.string().required(),
        year:Joi.number().required().min(1000),
        rating:Joi.string().required(),
    });
    return schema.validate(movie);
};


app.listen(3001, ()=>{
    console.log("i'm listening");
});