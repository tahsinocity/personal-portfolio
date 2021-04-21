import * as React from "react"

export const Aboutme = () => {
  return (
    <div id="aboutme">
      <div className="lg:pt-2 2xl:pt-72 flex relative justify-between text-darkpurple mb-28">
        <div className="flex flex-col justify-start mt-32 lg:ml-44 mr-44 2xl:ml-80">
          <h1 className="flex text-5xl">
            About <h4 className="text-pink text-5xl">&nbsp;me</h4>
          </h1>
          <div className="border rounded-lg shadow-lg p-8 mb-4">
            <p className="text-xl pt-4 leading-loose">
              Hi, I am Tahsin Ahmed. I am a Full Stack Engineer with a lifelong
              love of puzzles and a strong drive to always know the why and how.
              Experienced with Javascript, React, Redux, Node.js (with and
              without Express.js), SQL, relational and non-relational databases.
              In addition, I have 4+ years of experience in the medical device
              industry, with a focus on Quality Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
