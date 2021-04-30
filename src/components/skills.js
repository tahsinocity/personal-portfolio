import * as React from "react"
import JS from "../images/devicons/js.svg"
import HTML from "../images/devicons/html.svg"
import CSS from "../images/devicons/css.svg"
import SASS from "../images/devicons/sass.svg"
import MOCHA from "../images/devicons/mocha.svg"
import REACT from "../images/devicons/react.svg"
import EXPRESS from "../images/devicons/express.svg"
import NODE from "../images/devicons/node.svg"
import REDUX from "../images/devicons/redux.svg"
import JQUERY from "../images/devicons/jquery.svg"
import FIGMA from "../images/devicons/figma.svg"
import GIT from "../images/devicons/git.svg"
import POSTGRES from "../images/devicons/postgres.svg"
import MYSQL from "../images/devicons/mysql.svg"
import MONGO from "../images/devicons/mongo.svg"
import WEBPACK from "../images/devicons/webpack.svg"
import DOCKER from "../images/devicons/docker.svg"
import HEROKU from "../images/devicons/heroku.svg"

export const Skills = () => {
  return (
    <div id="skills" className="vector2">
      <div className="lg:pt-2 2xl:pt-2 flex justify-between text-darkpurple">
        <div className="flex flex-col justify-start mt-12 lg:ml-44 mr-44 2xl:ml-80">
          <h1 className="flex text-5xl">
            Skill <h4 className="text-pink text-5xl">s</h4>
          </h1>
          <div className="flex flex-col border rounded-lg shadow-lg p-12 mb-4">
            <div className="flex justify-around pl-12 pr-12">
              <img
                src={JS}
                className="2xl:-ml-14 mr-2 mt-2 mb-2 p-1"
                alt="JS logo"
              />
              <img src={HTML} className="m-2 p-1" alt="HTML Logo" />
              <img src={CSS} className="m-2 p-1" alt="CSS Logo" />
              <img src={SASS} className="m-2 p-1" alt="SASS Logo" />
              <img src={MOCHA} className="m-2 p-1" alt="MOCHA Logo" />
              <img src={REACT} className="m-2 p-1" alt="REACT Logo" />
            </div>
            <div className="flex justify-between pl-12 pr-12">
              <img
                src={EXPRESS}
                className="-ml-14 mr-2 mt-2 mb-2 p-1"
                alt="EXPRESS Logo"
              />
              <img src={NODE} className="m-2 p-1" alt="NODE Logo" />
              <img src={REDUX} className="m-2 p-1" alt="REDUX Logo" />
              <img src={JQUERY} className="m-2 p-1" alt="JQUERT Logo" />
              <img src={FIGMA} className="m-2 p-1" alt="FIGMA Logo" />
              <img src={GIT} className="m-2 p-1" alt="GIT Logo" />
            </div>
            <div className="flex justify-between pl-12 pr-12">
              <img
                src={POSTGRES}
                className="-ml-14 mr-2 mt-2 mb-2 p-1"
                alt="POSTGRES Logo"
              />
              <img src={MYSQL} className="m-2 p-1" alt="MYSQL Logo" />
              <img src={MONGO} className="m-2 p-1" alt="MONGO Logo" />
              <img src={WEBPACK} className="m-2 p-1" alt="WEBPACK Logo" />
              <img src={DOCKER} className="m-2 p-1" alt="DOCKER Logo" />
              <img src={HEROKU} className="m-2 p-1" alt="HEROKU Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
