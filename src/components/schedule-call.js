import React from "react"
import ReCaptcha from "../components/reCaptcha"
import { useState } from "react"

//! Cliend ID: 1049469473827-9b2m94u9pkns0th7te9l8djipi6cfk70.apps.googleusercontent.com
//! Client Secret: kqsRxrVl-4f_hhnXv-zLrdAq
//! API Key: AIzaSyCKblgLiC89nIWZnR8J5m2tblE9P-iV3go

//
const ScheduleCall = () => {
  const [isOpen, setIsOpen] = useState(false)
  // console.log("isOpen: ", isOpen)

  // useEffect(() => {
  //   const head = document.querySelector("head")
  //   const script = document.createElement("script")
  //   script.setAttribute(
  //     "src",
  //     "https://assets.calendly.com/assets/external/widget.js"
  //   )
  //   head.appendChild(script)

  //   console.log(`script is:`, script)

  //   const link = document.createElement("link")
  //   link.setAttribute(
  //     "href",
  //     "https://assets.calendly.com/assets/external/widget.css"
  //   )

  //   head.appendChild(link)
  // }, [])

  return (
    <div className="bg-lightBlue-50">
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-blueGray-700 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-yellow-600">
              Schedule a call with us today!
            </span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500"
              >
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Putting Google ReCaptcha here on a modal */}
        <ReCaptcha isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* 
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
      
      <script type="text/javascript">Calendly.initBadgeWidget({ url: 'https://calendly.com/meerkatitsolutions/15min', text: 'Schedule time with me', color: '#00a2ff', textColor: '#ffffff', branding: true });</script> */}

      {/* Calendly */}
      {/* <!-- Calendly inline widget begin --> */}
      {/* <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/meerkatitsolutions/15min"
          style={{ minWidth: 320, maxHeight: 1000 }}
        /> */}

      {/* <!-- Calendly inline widget end --> */}
      {/* End of Calendly */}
    </div>
  )
}

export default ScheduleCall
