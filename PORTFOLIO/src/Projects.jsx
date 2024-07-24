import React from 'react'
import donkeyro from './assets/Donkey-ro!.png'
import tshirt from './assets/T-shirt-creator.png'
import EarT from './assets/Ear-Crary-Train-er.png'
import weather from './assets/weather-app.png'
import Button from './Button'


const Projects = () => {
  return (<>
    <div className="background hero projects-container" id="projects">
      <div className="project-child">
        <img className ="project-img" src={tshirt} alt="T-shirt" />
        <p className="project-p">
           <a href="https://github.com/ValSantini/T-shirt-customizer-website" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-1">A project I developed studying Three JS.<br/>It requires an API for the AI.</p>
            <Button targetId="p-description-1" />

      <div className="project-child">
        <img className ="project-img" src={EarT} alt="EarT" />
        <p className="project-p">
           <a href="https://github.com/ValSantini/Ear-Crazy-Train-er" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-2">I developed this project using JS to help<br/>beginner musician to train their ear.<br/> And if you like Tom Morello,<br/>well, I guess we cannot be friends then...</p>
            <Button targetId="p-description-2" />

      <div className="project-child">
        <img className ="project-img" src={weather} alt="Weather" />
        <p className="project-p">
           <a href="https://github.com/ValSantini/Weather-App" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-3">A project I developed studying API.<br/></p>
            <Button targetId="p-description-3" />

      <div className="project-child">
        <img className ="project-img" src={donkeyro} alt="Donkey!" />
        <p className="project-p">
           <a href="https://github.com/ValSantini/Donkey-ro" target="_blank">Source Code</a>
          </p>
      </div>
            <p className="project-p-outside" id="p-description-4">A light-hearted project I developed because<br/>somebody once told me the world is gonna roll me<br/>and that<br/>I ain't the sharpest tool in the shed</p>
            <Button targetId="p-description-4" />
      
    </div>
    </>)
}

export default Projects
