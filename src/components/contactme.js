import * as React from "react"

export const ContactMe = () => {
  return (
    <div id="skills">
      <div className="lg:pt-32 2xl:pt-72 flex justify-between text-darkpurple">
        <div className="flex flex-col justify-start mt-32 lg:ml-44 mr-44 2xl:ml-80">
          <h1 className="flex text-5xl">
            Contact <h4 className="text-pink text-5xl">&nbsp;Me</h4>
          </h1>
          <div className="border rounded-lg shadow-lg p-8 mb-4">
            <p className="text-xl pt-4 leading-loose">Skills</p>
          </div>
        </div>
      </div>
    </div>
  )
}
