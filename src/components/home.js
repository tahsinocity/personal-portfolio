import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export const Home = () => {
  return (
    <div>
      <div className="flex relative justify-between text-darkpurple">
        <div className="flex flex-col items-center mt-32">
          <h1 className="text-5xl">Tahsin Ahmed</h1>
          <h4 className="flex flex-row text-xl">
            Software Engineer | <h4 className="text-pink text-xl">&nbsp;NY</h4>
          </h4>
          <Link to="/aboutme">
            <button className="border rounded-lg pt-3 pb-3 pl-6 pr-6 bg-gradient-to-r from-pink-300 to-pink shadow-lg hover:text-white">
              About me
            </button>
          </Link>
        </div>
        <StaticImage
          src="../images/profilepic.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="profile picture"
          className=""
        />
      </div>
    </div>
  )
}
