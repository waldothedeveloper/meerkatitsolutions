import React from "react"
import Recaptcha from "react-recaptcha"
import { Transition } from "@headlessui/react"
import { useEffect } from "react"
// import tellMeMore from "../images/tell_me_more.jpg"
import robotWebM from "../images/robot-3.webm"
import robotMP4 from "../images/robot-3.mp4"

const ReCaptcha = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      // console.log("prevent scrolling")
      document.body.style.overflow = "hidden"
    } else {
      // console.log("restore scrolling")
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // specifying verify callback function
  const verifyCallback = function (response) {
    if (response !== null) {
      // console.log(`you can continue to something else`, response)
    } else {
      // console.log("robot detected")
    }
  }

  return (
    <Transition
      show={isOpen}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Close</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-xl leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Are you a robot?
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      As a protection against automated spam, please check the
                      box below to proceed.
                    </p>
                  </div>
                  <div className="mt-12">
                    <div className="flex justify-center items-center">
                      <video
                        className="h-32 w-32"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={robotWebM} type="video/webm" />
                        <source src={robotMP4} type="video/mp4" />
                      </video>
                      {/* <img
                        class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={tellMeMore}
                        alt=""
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <div className="flex items-center justify-center my-12">
                  <Recaptcha
                    sitekey={
                      process.env.GATSBY_RECAPTCHA_SITEKEY_DEVELOPMENT ||
                      process.env.GATSBY_RECAPTCHA_SITEKEY_PRODUCTION
                    }
                    verifyCallback={verifyCallback}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default ReCaptcha
