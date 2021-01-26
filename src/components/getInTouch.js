import React from "react"

const GetInTouch = () => {
  return (
    <div>
      <div className="pt-8">
        {/* <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-orange-900 sm:text-3xl sm:leading-9">
          Get in touch
        </h2> */}
        <dl className="mt-8 text-base leading-6 text-cool-gray-50">
          <div className="mt-6">
            <dt className="sr-only">Phone number</dt>
            <dd className="flex">
              {/* Heroicon name: phone */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-cool-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="ml-3">+1 (786) 521-3075</span>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              {/* Heroicon name: mail */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-cool-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3">info@meerkatitsolutions.com</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default GetInTouch
