const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

let houses = [
    {
        be_id: "1",
        title: "John Wick",
        Genre: "Action",
        image1: "images/JWimg.jfif",
        image2: "images/JW2.jfif",
        desc:"Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
        cast: "Cast: Keanu Reeves, Adrianne Palicki",
        year: "Year: 2014",
        rating: "Rating: 7.4/10 IMDb"
    },
    
    {
        be_id: "2",
        title: "The Fall Guy",
        Genre: "Action",
        image1: "images/FGimg.jfif",
        image2: "images/FG2.jfif",
        desc:"After leaving the business one year earlier, battle-scarred stuntman Colt Seavers springs back into action when the star of a big studio movie suddenly disappears. As the mystery surrounding the missing actor deepens, Colt soon finds himself ensnared in a sinister plot that pushes him to the edge of a fall more dangerous than any stunt.",
        cast: "Cast: Ryan Gosling, Emily Blunt",
        year: "Year: 2024",
        rating: "Rating: 6.8/10 IMDb"
    },
    
    {
        be_id: "3",
        title: "Flight Risk",
        Genre: "Action",
        image1: "images/FR.jfif",
        image2: "images/fr2.jfif",
        desc:"A U.S. marshal boards a small plane to transfer a government witness to New York. As they cross the Alaskan wilderness, tensions start to rise as not everyone on the flight is who they appear to be.",
        cast: "Cast: Mark Wahlberg, Michelle Dockery",
        year: "Year: 2025",
        rating: "Rating: 5.3/10 IMDb"
    },
    
    {
        be_id: "4",
        title: "Free Guy",
        Genre: "Comedy",
        image1: "images/FreeG.jfif",
        image2: "images/freeG2.jfif",
        desc: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
        cast: "Cast: Ryan Reynolds, Jodie Comer",
        year: "Year: 2021",
        rating: "Rating: 7.1/10 IMDb"
    },
    
    {
        be_id: "5",
        title: "White Chicks",
        Genre: "Comedy",
        image1: "images/WC.jfif",
        image2: "images/wc2.jfif",
        desc:"Two FBI agent brothers, Marcus (Marlon Wayans) and Kevin Copeland (Shawn Wayans), accidentally foil a drug bust. As punishment, they are forced to escort a pair of socialites (Anne Dudek, Rochelle Aytes) to the Hamptons, where they're going to be used as bait for a kidnapper. But when the girls realize the FBI's plan, they refuse to go. Left without options, Marcus and Kevin decide to pose as the sisters, transforming themselves from African-American men into a pair of blonde, white women.",
        cast: "Cast: Shawn Wayans, Marlon Wayans",
        year: "Year: 2004",
        rating: "Rating: 5.8/10 IMDb"
    },
    
    {
        be_id: "6",
        title: "Fly me to the moon",
        Genre: "Comedy",
        image1: "images/flmm.jfif",
        image2:"images/flmm2.jfif",
        desc:"A marketing specialist, Kelly Jones, is tasked with staging a fake moon landing as a backup plan in case the real Apollo 11 mission fails, leading to a romantic comedy-drama set against the backdrop of the space race.",
        cast: "Cast: Channing Tatum, Scarlett Johanessen",
        year: "Year: 2024",
        rating: "Rating: 6.6/10 IMDb"
    },
    
    {
        be_id: "7",
        title: "La La Land",
        Genre: "Romance",
        image1: "images/LLL.jfif",
        image2: "images/LLL2.jfif",
        desc: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
        cast: "Cast: Ryan Gosling, Emma Stone",
        year: "Year: 2016",
        rating: "Rating: 8/10 IMDb"
    },
    
    {
        be_id: "8",
        title: "The Idea of You",
        Genre: "Romance",
        image1: "images/idea.jfif",
        image2: "images/idea2.jfif",
        desc:"A 40-year-old single mum begins an unexpected romance with a 24-year-old boy band singer.",
        cast: "Cast: Anne Hathaway, Nicholas Galitzine",
        year: "Year: 2024",
        rating: "Rating: 6.3/10 IMDb"
    },
    
    {
        be_id: "9",
        title: "Anyone But You",
        Genre: "Romance",
        image1: "images/anyone.jfif",
        image2: "images/anyone2.jfif",
        desc:"Despite having an amazing first date, Bea and Ben's initial attraction quickly turns sour. When they unexpectedly find themselves at a destination wedding in Australia, the pair pretend to be the perfect couple to keep up appearances.",
        cast: "Cast: Sydney Sweeney, Glen Powell",
        year: "Year: 2023",
        rating: "Rating: 6.1/10 IMDb"
    }
];

app.get("/api/movies", (req, res)=>{
    res.send(houses);
})

app.listen(3001, ()=>{
    console.log("i'm listening");
});