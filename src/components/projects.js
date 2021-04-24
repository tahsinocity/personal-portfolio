import * as React from "react"
import SOJOURNER from "../images/sojourner.svg"
import GITHUB from "../images/devicons/githubcontact.svg"

export const Projects = () => {
  return (
    <div id="projects">
      <div className="lg:pt-2 2xl:pt-72 flex justify-between text-darkpurple">
        <div className="flex flex-col justify-start mt-32 lg:ml-44 mr-44 2xl:ml-80">
          <h1 className="flex text-5xl text-pink">
            Project <h4 className=" text-5xl text-darkpurple">s</h4>
          </h1>
          <div className=" flex flex-col items-center border rounded-lg shadow-lg p-8 mb-4">
            <div className="p-6">
              <h2>Blueberry Express</h2>
              <div className="flex border rounded-lg shadow-lg">
                <div className="border">
                  <img
                    src={SOJOURNER}
                    className="w-2/3 h-full"
                    alt="SOJOURNER"
                  />
                </div>
                <div className="p-6">
                  <p>
                    Blueberry Express is a full-stack web application built on
                    React. Blueberry Express's focus aims to connect teachers
                    who want to volunteer to teach students a new language.
                    Users are prompted to choose between either student /
                    teacher when they sign up using Google OAuth.
                  </p>
                  <br />
                  <p>
                    Live Demo:{" "}
                    <a
                      href="https://blueberryexpress.net/"
                      target="_blank"
                      className="text-pink"
                    >
                      https://blueberryexpress.net/
                    </a>
                  </p>
                  <a
                    href="https://github.com/tahsinocity/Blueberry-Express"
                    target="_blank"
                  >
                    <img
                      src={GITHUB}
                      className="m-2 p-1 w-9 hover:shadow-lg"
                      alt="Github logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2>Callback</h2>
              <div className="flex justify-between border rounded-lg shadow-lg">
                <div className="border">
                  <img
                    src={SOJOURNER}
                    className="w-2/3 h-full"
                    alt="SOJOURNER"
                  />
                </div>
                <div className="p-6">
                  <p>
                    This project was done in a two-day sprint where I used
                    server-side templating language such as EJS to generate HTML
                    markup to display video and chat features. I applied PeerJS
                    to wrap the browser's WebRTC implementation to create a P2P
                    media stream connection to a remote peer. I implemented chat
                    room functionality using Socket.IO which enabled real-time
                    and bidirectional communication. And lastly, I employed UUID
                    library to generate unique room ids.
                  </p>
                  <a
                    href="https://github.com/tahsinocity/callback"
                    target="_blank"
                  >
                    <img
                      src={GITHUB}
                      className="m-2 p-1 w-9 hover:shadow-lg"
                      alt="Github logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2>Lion's Den</h2>
              <div className="flex border rounded-lg shadow-lg">
                <div className="w-full">
                  <img src={SOJOURNER} className="m-2 p-1" alt="SOJOURNER" />
                </div>
                <div className="p-6">
                  <p>
                    This project was to build a modern, e-commerce, platform for
                    the fictitious company Lion's Den Apparel. My biggest
                    accomplishment technically was building out the 'Ratings And
                    Reviews'. Due to the winter storms that took Texas by
                    surprise, we were not able to deploy this project,
                    nonetheless, I am proud of how much our team was able to
                    accomplish on a shortened timeline.
                  </p>
                  <a
                    href="https://github.com/tahsinocity/project-cat-walk"
                    target="_blank"
                  >
                    <img
                      src={GITHUB}
                      className="m-2 p-1 w-9 hover:shadow-lg"
                      alt="Github logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2>Project Sojourner</h2>
              <div className="flex border rounder-lg shadow-lg">
                <div className="w-full">
                  <img src={SOJOURNER} className="m-2 p-1" alt="SOJOURNER" />
                </div>
                <div className="p-6">
                  <p>
                    Project Sojourner was a system design project for a leagcy
                    code base. This back-end was responsible for managing server
                    calls between the client and the database, with millions of
                    data entries to mimic real-user traffic. I scaled out a
                    legacy REST API to handle up to 300RPS based on load testing
                    benchmarks using metrics from Artillery.io.
                  </p>
                  <a href="https://github.com/Team-Sojourner" target="_blank">
                    <img
                      src={GITHUB}
                      className="m-2 p-1 w-9 hover:shadow-lg"
                      alt="Github logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/tahsinocity?tab=repositories"
              target="_blank"
            >
              <button className="border rounded-lg pt-3 pb-3 pl-8 pr-8 mt-6 bg-gradient-to-r from-pink-300 to-pink shadow-lg hover:text-white">
                More Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
