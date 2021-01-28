import React from "react"
import { useState } from "react"
import StepsManager from "./schedules/steps_manager"

//
const ScheduleCall = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log("isOpen: ", isOpen)

  return (
    <div className="bg-yellow-50">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex-col lg:items-center lg:justify-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Schedule a call</span>
          <span className="block text-yellow-600">Let us help you grow!</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <div className="w-full md:mr-12">
            <label
              htmlFor="phone_number"
              className="sr-only block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm w-full">
              <input
                type="text"
                id="phone_number"
                className="py-3 px-4 block w-full pl-4 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
                placeholder="+1 (555) 987-6543"
              />
            </div>
          </div>
          <div className="flex lg:flex-shrink-0 mt-6 md:mt-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <StepsManager isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default ScheduleCall
