import * as React from "react"
import PDF from "../assets/resume.pdf"

const Header = () => (
  <header>
    <nav className="flex justify-end items-center text-darkpurple mr-16">
      <ul className="flex justify-around w-2/5 mt-6 ">
        <li className="hover:underline">
          <a href="#aboutme">About me</a>
        </li>
        <li className="hover:underline">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:underline">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:underline">
          <a href="#contactme">Contact me</a>
        </li>
        <li className="hover:underline">
          <a href={PDF} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
