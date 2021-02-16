import React from "react"
import diversePeople from "../images/diverse-people.jpeg"

const Pricing = () => {
  return (
    <div>
      {/* Pricing with four tiers and toggle */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Popular Bundle Plans
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              All monthly plans come with 7 days free trial. <br />
              All yearly plans come with 15 days free trial.
            </p>
            <div className="relative mt-6 bg-blueGray-100 rounded-lg p-0.5 flex self-center sm:mt-8">
              <button
                type="button"
                className="relative bg-blueGray border-blueGray-200 rounded-md shadow-sm py-2 w-1/2 text-sm font-medium text-blueGray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="ml-0.5 relative border border-transparent rounded-md py-2 w-1/2 text-sm font-medium text-blueGray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:w-auto sm:px-8"
              >
                Yearly billing
              </button>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Lazuli
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $12
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <a
                  href="/"
                  className="mt-8 block w-full bg-yellow-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-yellow-700"
                >
                  Buy Lazuli
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Potenti felis, in cras at at ligula nunc.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Orci neque eget pellentesque.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Cazanna
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $24
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <a
                  href="/"
                  className="mt-8 block w-full bg-yellow-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-yellow-700"
                >
                  Buy Cazanna
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Potenti felis, in cras at at ligula nunc.{" "}
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Orci neque eget pellentesque.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Donec mauris sit in eu tincidunt etiam.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Rufus
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $32
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <a
                  href="/"
                  className="mt-8 block w-full bg-yellow-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-yellow-700"
                >
                  Buy Rufus
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Potenti felis, in cras at at ligula nunc.{" "}
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Orci neque eget pellentesque.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Donec mauris sit in eu tincidunt etiam.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Faucibus volutpat magna.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Big Si
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    $48
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <a
                  href="/"
                  className="mt-8 block w-full bg-yellow-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-yellow-700"
                >
                  Buy Big Si
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Potenti felis, in cras at at ligula nunc.{" "}
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Orci neque eget pellentesque.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Donec mauris sit in eu tincidunt etiam.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Faucibus volutpat magna.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Id sed tellus in varius quisque.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Risus egestas faucibus.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/* Heroicon name: check */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-lightBlue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      Risus cursus ullamcorper.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Feature list */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              All-in-one platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Invite team members
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse
                    est, molestie blandit quis ac. Lacus.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Notifications
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Ornare donec rhoncus vitae nisl velit, neque, mauris dictum
                    duis. Nibh urna non parturient.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  List view
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Etiam cras augue ornare pretium sit malesuada morbi orci,
                    venenatis. Dictum lacus.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Boards
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Interdum quam pulvinar turpis tortor, egestas quis diam
                    amet, natoque. Mauris sagittis.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Keyboard shortcuts
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Ullamcorper in ipsum ac feugiat. Senectus at aliquam
                    vulputate mollis nec. In at risus odio.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Reporting
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Magna a vel sagittis aliquam eu amet. Et lorem auctor quam
                    nunc odio. Sed bibendum.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Calendars
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Sed mi, dapibus turpis orci posuere integer. A porta viverra
                    posuere adipiscing turpis.
                  </span>
                </dd>
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Heroicon name: check */}
              <svg
                className="flex-shrink-0 h-6 w-6 text-lightBlue-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Mobile app
                </dt>
                <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                  <span className="text-base text-gray-500">
                    Quisque sapien nunc nisl eros. Facilisis sagittis maecenas
                    id dignissim tristique proin sed.
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Pricing
