import React from 'react';
import { Link } from "react-router-dom";

function ProjectGallery() {

  const  data = [
        {
            title: "drinkUp",
            description: "An app designed for the casual (or avid) drinker. Enter any ingredient and drinkUpp will return a list of all the beverages which contain said ingredient.",
            image:  "",
            link: "https://markdrecoll.github.io/drinkUpp/",
            repoUrl: "https://github.com/markdrecoll/drinkUpp"


        },
        {
            title: "Scaled",
            description: "An app designed for musicians to practice their notes and scales. The musician will choose a lesson, a note from that scale will appear on the screen, and as the musician plays, the app will return correct or inccorect depending if the user plays that note correctly.",
            image: "../drinkupp.png",
            link: "https://sleepy-falls-53764.herokuapp.com/",
            repoUrl: " https://github.com/MattReisdorf/Project2-Music-Lessons"
        },
        {
            title: "Weather Dashboard",
            description: "Search any city in the world and get the current weather as well as the 5-day forecast.",
            image: "",
            link: "https://harrisonblackburn.github.io/weather_db/",
            repoUrl: "https://github.com/harrisonblackburn/weather_db "
        },
        {
            title: "Password Generator",
            description: "This app will return a randomly-generated password based on criteria selected by the user",
            image: "",
            link: "https://harrisonblackburn.github.io/passwordGenerator/",
            repoUrl: "https://github.com/harrisonblackburn/passwordGenerator"
        },
        {
            title: "Employee Directory",
            description: "This app allows a business owner to view employee information in a directory",
            image: "",
            link: "https://harrisonblackburn.github.io/employeedirectory2/",
            repoUrl: "https://github.com/harrisonblackburn/employeedirectory2/tree/master"
        },
        {
            title: "Progressive Budget",
            description: "This app allows a user to add expenses and deposits to their budget.",
            image: "",
            link: "https://guarded-anchorage-34889.herokuapp.com/",
            repoUrl: "https://github.com/harrisonblackburn/progressiveBudget2"
        },
    ]
    return (
        <div>
            {data.map((project) => (
                <div class="card">
                    <img src="" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{project.title}</h5>
                        <p class="card-text">{project.description}</p>
                        <a href={project.link} class="btn btn-primary">Live Site</a>
                        <a href={project.repoUrl} class="btn btn-primary">Github</a>
                    </div>
                </div>

            ))}

        </div>

    )
}

export default ProjectGallery