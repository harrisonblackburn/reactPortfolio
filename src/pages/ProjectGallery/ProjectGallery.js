import React from 'react';
import { Link } from "react-router-dom";
import "./style.css"

function ProjectGallery() {

  const  data = [
        {
            title: "drinkUp",
            description: "An app designed for the casual (or avid) drinker. Enter any ingredient and drinkUpp will return a list of all the beverages which contain said ingredient.",
            image:  "https://www.portabar-mykonos.com/wp-content/uploads/2020/04/the-best-cocktail-bar-in-Mykonos-Porta-Bar-Mykonos-1.jpg",
            link: "https://markdrecoll.github.io/drinkUpp/",
            repoUrl: "https://github.com/markdrecoll/drinkUpp"


        },
        {
            title: "Scaled",
            description: "An app designed for musicians to practice their notes and scales. The musician will choose a lesson, a note from that scale will appear on the screen, and as the musician plays, the app will return correct or inccorect depending if the user plays that note correctly.",
            image: "https://i.pinimg.com/originals/a6/93/de/a693deacf994a83e02152c6685bdfcf9.png",
            link: "https://sleepy-falls-53764.herokuapp.com/",
            repoUrl: " https://github.com/MattReisdorf/Project2-Music-Lessons"
        },
        {
            title: "Weather Dashboard",
            description: "Search any city in the world and get the current weather as well as the 5-day forecast.",
            image: "https://static01.nyt.com/images/2014/05/25/magazine/25wmt/mag-25WMT-t_CA0-superJumbo.jpg",
            link: "https://harrisonblackburn.github.io/weather_db/",
            repoUrl: "https://github.com/harrisonblackburn/weather_db "
        },
        {
            title: "Password Generator",
            description: "This app will return a randomly-generated password based on criteria selected by the user",
            image: "https://i1.wp.com/www.excelcise.org/wp-content/uploads/featuredImgRandomString.png?fit=200%2C200&ssl=1",
            link: "https://harrisonblackburn.github.io/passwordGenerator/",
            repoUrl: "https://github.com/harrisonblackburn/passwordGenerator"
        },
        {
            title: "Employee Directory",
            description: "This app allows a business owner to view employee information in a directory",
            image: "https://blog.trello.com/hubfs/Imported_Blog_Media/typeform_feature-1024x512.jpg",
            link: "https://harrisonblackburn.github.io/employeedirectory2/",
            repoUrl: "https://github.com/harrisonblackburn/employeedirectory2/tree/master"
        },
        {
            title: "Progressive Budget",
            description: "This app allows a user to add expenses and deposits to their budget.",
            image: "https://wellkeptwallet.com/wp-content/uploads/Recommended-Budget-Percentages-final.png",
            link: "https://guarded-anchorage-34889.herokuapp.com/",
            repoUrl: "https://github.com/harrisonblackburn/progressiveBudget2"
        },
    ]
    return (
        <div>
            <div className="row">
            {data.map((project) => (
                <div className="col-4">
                <div class="card" width="18rem">
                    <img src = {project.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{project.title}</h5>
                        <p class="card-text">{project.description}</p>
                        <a href={project.link} class="btn btn-primary">Live Site</a>
                        <a href={project.repoUrl} class="btn btn-primary">Github</a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

    )
}

export default ProjectGallery