import React from "react";
import "./Project.css";
import Title from "../shared/Title";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Loan EMI calculator",
      github:
        "https://github.com/ajaypatidar1789/Loan-EMI-calculator.git",
      img: "/assets/emi.png",
      live: "https://ajaypatidar1789.github.io/Loan-EMI-calculator/",
    },
    {
      id: 2,
      title: "VyayamShala Website",
      github: "https://github.com/ajaypatidar1789/my-vyayam-shala-project.git",
      img: "/assets/gym.png",
      live: "https://ajaypatidar1789.github.io/my-vyayam-shala-project/",
    },
    {
      id: 3,
      title: "TIC-TAC-TOE Game",
      github: "https://github.com/ajaypatidar1789/Tic-tac-toe.git",
      img: "/assets/tic-tac-toe.png",
      live: "https://ajaypatidar1789.github.io/Tic-tac-toe/",
    },
    // {
    //   id: 4,
    //   title: "Show Review React App",
    //   github: "https://github.com/aayush-004v/Tv-Maze-React",
    //   img: "/assets/tv-maze-app.png",
    //   live: "https://tv-maze-react.vercel.app/",
    // },
    // {
    //   id: 5,
    //   title: "Expense Tracker React",
    //   github: "https://github.com/aayush-004v/Expense_Tracker_React",
    //   img: "/assets/expense-tracker.png",
    //   live: "https://expense-tracker-react-beta.vercel.app/",
    // },
    // {
    //   id: 6,
    //   title: "Weather App React",
    //   github: "https://github.com/aayush-004v/weather-app-react",
    //   img: "/assets/weather-app.png",
    //   live: "https://weather-app-react-aayush.vercel.app/",
    // },
  ];

  return (
    <section id="portfolio">
      <Title title="Project" text="My Recent Work" />
      <div className="works-container">
        {projects.map((work) => {
          return (
            <div className="work-item" key={work.id}>
              <div className="work-img">
                <img src={work.img} alt={work.title} />
              </div>
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm "
                  >
                    Github
                  </a>
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
