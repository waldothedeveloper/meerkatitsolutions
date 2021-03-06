import React from "react"
import { Transition } from "@headlessui/react"
import logo from "../images/Meerkat-LOGO.png"
// import logo from "../images/meerkat-new-logo.svg"
import { useState } from "react"
import { Link } from "gatsby"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a className="flex items-center" href="/" aria-label="Home">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
              <div className="px-4 font-semibold tracking-tight">
                Meerkat <span className="text-lightBlue-500">IT Solutions</span>
              </div>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-coolGray-600 hover:text-coolGray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightBlue-500"
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: menu */}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/* Item active: "text-blueGray-900", Item inactive: "text-blueGray-800" */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="group rounded-md text-blueGray-800 inline-flex items-center text-base font-medium hover:text-blueGray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-500"
              >
                <span>Solutions</span>
                {/* <!--
            Heroicon name: chevron-down

            Item active: "text-blueGray-600", Item inactive: "text-coolGray-600"
          --> */}
                <svg
                  className="ml-2 h-5 w-5 text-blueGray-800 group-hover:text-blueGray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* <!--
          'Solutions' flyout menu, show/hide based on flyout menu state.

        --> */}
              <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <div className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a
                        href="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-blueGray-50"
                      >
                        {/* Heroicon name: chart-bar */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-blueGray-900">
                            Analytics
                          </p>
                          <p className="mt-1 text-sm text-blueGray-800">
                            Get a better understanding of where your traffic is
                            coming from.
                          </p>
                        </div>
                      </a>

                      <a
                        href="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-blueGray-50"
                      >
                        {/* Heroicon name: cursor-click */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-blueGray-900">
                            Engagement
                          </p>
                          <p className="mt-1 text-sm text-blueGray-800">
                            Speak directly to your customers in a more
                            meaningful way.
                          </p>
                        </div>
                      </a>

                      <a
                        href="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-blueGray-50"
                      >
                        {/* Heroicon name: shield-check */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-blueGray-900">
                            Security
                          </p>
                          <p className="mt-1 text-sm text-blueGray-800">
                            Your customers&#039; data will be safe and secure.
                          </p>
                        </div>
                      </a>

                      <a
                        href="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-blueGray-50"
                      >
                        {/* Heroicon name: view-grid */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-blueGray-900">
                            Integrations
                          </p>
                          <p className="mt-1 text-sm text-blueGray-800">
                            Connect with third-party tools that you&#039;re
                            already using.
                          </p>
                        </div>
                      </a>

                      <a
                        href="/"
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-blueGray-50"
                      >
                        {/* Heroicon name: refresh */}
                        <svg
                          className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-blueGray-900">
                            Automations
                          </p>
                          <p className="mt-1 text-sm text-blueGray-800">
                            Build strategic funnels that will drive your
                            customers to convert
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-blueGray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      <div className="flow-root">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-blueGray-900 hover:bg-blueGray-100"
                        >
                          {/* Heroicon name: play */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-coolGray-600"
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
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="ml-3">Watch Demo</span>
                        </a>
                      </div>

                      <div className="flow-root">
                        <a
                          href="/"
                          className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-blueGray-900 hover:bg-blueGray-100"
                        >
                          {/* Heroicon name: phone */}
                          <svg
                            className="flex-shrink-0 h-6 w-6 text-coolGray-600"
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="ml-3">Contact Sales</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <a
              href="/"
              className="text-base font-medium text-blueGray-800 hover:text-blueGray-600"
            >
              Pricing
            </a>

            <a
              href="/"
              className="text-base font-medium text-blueGray-800 hover:text-blueGray-600"
            >
              Support
            </a>

            <a
              href="/"
              className="text-base font-medium text-blueGray-800 hover:text-blueGray-600"
            >
              Contact
            </a>
            <Link
              to="/about"
              className="text-base font-medium text-blueGray-800 hover:text-blueGray-600"
            >
              About
            </Link>
          </nav>
          {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href="/"
            className="whitespace-nowrap text-base font-medium text-blueGray-800 hover:text-blueGray-900"
          >
            Sign in
          </a>
          <a
            href="/"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
          >
            Sign up
          </a>
        </div> */}
        </div>
      </div>

      {/* <!--
  Mobile menu, show/hide based on mobile menu state.

  Entering: "duration-200 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
--> */}
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-16 w-auto"
                    src={logo}
                    alt="Meerkat IT Solutions logo"
                  />
                  <div className="px-4 font-bold tracking-tight">
                    Meerkat{" "}
                    <span className="text-lightBlue-500">IT Solutions</span>
                  </div>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-coolGray-600 hover:text-coolGray-500hover:bg-blueGray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: x */}
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
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-blueGray-50"
                  >
                    {/* Heroicon name: chart-bar */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-blueGray-900">
                      Analytics
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-blueGray-50"
                  >
                    {/* Heroicon name: cursor-click */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-blueGray-900">
                      Engagement
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-blueGray-50"
                  >
                    {/* Heroicon name: shield-check */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-blueGray-900">
                      Security
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-blueGray-50"
                  >
                    {/* Heroicon name: view-grid */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-blueGray-900">
                      Integrations
                    </span>
                  </a>

                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-blueGray-50"
                  >
                    {/* Heroicon name: refresh */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-blueGray-900">
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Pricing
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Docs
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Enterprise
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Blog
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Help Center
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Guides
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Security
                </a>

                <a
                  href="/"
                  className="text-base font-medium text-blueGray-900 hover:text-blueGray-700"
                >
                  Events
                </a>
              </div>
              {/* <div>
              <a
                href="/"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-blueGray-800">
                Existing customer?
                <a
                  href="/"
                  className="text-yellow-600 hover:text-yellow-500"
                >
                  Sign in
                </a>
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Menu
