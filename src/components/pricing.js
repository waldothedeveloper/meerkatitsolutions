import React from "react"

const Pricing = () => {
  return (
    <div className="bg-white">
      {/* Pricing with four tiers and toggle */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
            <div className="relative mt-6 bg-gray-100 rounded-lg p-0.5 flex self-center sm:mt-8">
              <button
                type="button"
                className="relative bg-white border-gray-200 rounded-md shadow-sm py-2 w-1/2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="ml-0.5 relative border border-transparent rounded-md py-2 w-1/2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 sm:w-auto sm:px-8"
              >
                Yearly billing
              </button>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Hobby
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
                  Buy Hobby
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
                  Freelancer
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
                  Buy Freelancer
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
                  Startup
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
                  Buy Startup
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
                  Enterprise
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
                  Buy Enterprise
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

      {/* Logo cloud on brand */}
      <div className="bg-yellow-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="lg:space-y-10">
            <h2 className="text-3xl font-extrabold text-white">
              The world's most innovative companies use Meerkat IT Solutions
            </h2>
            <div className="mt-8 flow-root lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-purple-200.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-purple-200.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-purple-200.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-purple-200.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-purple-200.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ offset */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{" "}
              <a
                href="/"
                className="font-medium text-yellow-600 hover:text-lightBlue-500"
              >
                customer support
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do you make holy water?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You boil the hell out of it. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas cupiditate laboriosam
                  fugiat.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What&#039;s the best thing about Switzerland?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  I don&#039;t know, but the flag is a big plus. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What do you call someone with no body and no nose?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Nobody knows. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Why do you never see elephants hiding in trees?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Because they&#039;re so good at it. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quas cupiditate laboriosam
                  fugiat.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
