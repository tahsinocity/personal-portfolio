import * as React from "react"
import { useForm, ValidationError } from "@formspree/react"
import GITHUB from "../images/devicons/githubcontact.svg"
import LINKEDIN from "../images/devicons/linkedin.svg"

export const ContactMe = () => {
  const [state, handleSubmit] = useForm("mleadkpv")
  if (state.succeeded) {
    return (
      <div id="contactme" className="flex footer">
        <div className="lg:pt-2 2xl:pt-72 flex justify-between text-darkpurple">
          <div className="flex flex-col mt-20 lg:ml-44 mr-12 2xl:ml-80">
            <h1 className="flex text-5xl">
              Contact <h1 className="text-pink text-5xl">&nbsp;Me</h1>
            </h1>

            <div
              className="border rounded-lg shadow-lg p-8 mb-4 items-center"
              style={{ width: "72vw" }}
            >
              <h4>Lets stay in touch!</h4>
              <div className="flex flex-col justify-center">
                <div>
                  <h4>
                    Thank you for contacting me! I will get back to you as soon
                    as possible 😊
                  </h4>
                </div>

                <div className="flex justify-center shadow-sm">
                  <a
                    href="https://www.linkedin.com/in/tahsinahmed95/"
                    target="_blank"
                  >
                    <img
                      src={LINKEDIN}
                      className="m-2 p-1 w-9 hover:shadow-lg"
                      alt="LinkedIn logo"
                    />
                  </a>
                  <a
                    href="https://github.com/tahsinocity?tab=repositories"
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
          </div>
        </div>
      </div>
    )
  }
  return (
    <div id="contactme" className="flex footer">
      <div className="lg:pt-2 2xl:pt-2 flex justify-between text-darkpurple">
        <div className="flex flex-col mt-20 lg:ml-44 mr-12 2xl:ml-80">
          <h1 className="flex text-5xl">
            Contact <h1 className="text-pink text-5xl">&nbsp;Me</h1>
          </h1>

          <div
            className="border rounded-lg shadow-lg p-8 mb-4 items-center"
            style={{ width: "72vw" }}
          >
            <h4>Lets stay in touch!</h4>
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col p-4">
                <label>Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="border rounded-lg shadow-lg p-2 mb-4"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label>Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="border rounded-lg shadow-lg p-2 mb-4"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="border rounded-lg pt-3 pb-3 pl-8 pr-8 mt-6 bg-gradient-to-r from-pink-300 to-pink shadow-lg hover:text-white"
                >
                  Send ✍️
                </button>
              </form>
              <div className="flex justify-center shadow-sm">
                <a
                  href="https://www.linkedin.com/in/tahsinahmed95/"
                  target="_blank"
                >
                  <img
                    src={LINKEDIN}
                    className="m-2 p-1 w-9 hover:shadow-lg"
                    alt="LinkedIn logo"
                  />
                </a>
                <a
                  href="https://github.com/tahsinocity?tab=repositories"
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
        </div>
      </div>
    </div>
  )
}
