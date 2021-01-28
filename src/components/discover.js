import React from "react"
import { Link } from "gatsby"

const Discover = () => {
  return (
    <div className="py-12 bg-blueGray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="space-y-32 my-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl">
            <h2 className="text-3xl text-yellow-500 font-extrabold tracking-tight sm:text-4xl">
              Discover how we empower small businesses with our dedicated
              support and cloud services
            </h2>
          </div>
        </div>
        {/* GRID 1: Insurance, Doctors, Lawyers */}
        <dl className="md:grid md:grid-cols-2 md:gap-12 lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="md:mt-16 lg:mt-32 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <Link to="/">
              <div>
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/flagged/photo-1569948807383-bc995c4f6dd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                  alt="accident and insurance"
                />
              </div>

              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-yellow-500">
                  Insurance
                </dt>
                <dd className="mt-4 text-base text-blueGray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </Link>
          </div>

          <div className="md:mt-8 lg:mt-24 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <Link to="/">
              <div>
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=264&h=354&q=80"
                  alt="printing and imaging devices"
                />
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-yellow-500">
                  Doctors
                </dt>
                <dd className="mt-4 text-base text-blueGray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </Link>
          </div>

          <div className="md:mt-16 lg:mt-16 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <Link to="/">
              <div>
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                  alt="virus and security"
                />
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-yellow-500">
                  Lawyers
                </dt>
                <dd className="mt-4 text-base text-blueGray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </Link>
          </div>
        </dl>
        {/* GRID 2 ABA therapies, */}
        <dl className="md:grid md:grid-cols-2 md:gap-12 lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="md:mt-16 lg:mt-32 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <Link to="/">
              <div>
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1581975297096-abb291865541?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA4fHxraWRzJTIwcGxheWluZyUyMGluc3RydW1lbnR8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                  alt="accident and insurance"
                />
              </div>

              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-yellow-500">
                  Music & Arts
                </dt>
                <dd className="mt-4 text-base text-blueGray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </Link>
          </div>

          <div className="md:mt-8 lg:mt-24 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <Link to="/">
              <div>
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1536236502598-7dd171f8e852?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRpbm5lcnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                  alt="printing and imaging devices"
                />
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-yellow-500">
                  Restaurants
                </dt>
                <dd className="mt-4 text-base text-blueGray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </Link>
          </div>

          <div className="md:mt-16 lg:mt-16 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <Link to="/">
              <div>
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1543525324-9146d43c2a4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfDF8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                  alt="virus and security"
                />
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-yellow-500">
                  Contractors
                </dt>
                <dd className="mt-4 text-base text-blueGray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </Link>
          </div>
        </dl>
        {/* DISCOVER ALL OF OUR CUSTOMERS */}
        <div className="flex mt-64 mb-12 justify-end">
          <Link
            to="/"
            className="inline-flex items-center px-3 py-2 shadow-sm text-sm
              rounded-md focus:outline-none focus:ring-1 focus:ring-offset-1
              focus:ring-yellow-500 md:text-base text-yellow-500 uppercase
              font-extrabold tracking-tight"
          >
            {" "}
            Discover all of our customers
            <svg
              className="inline-flex ml-2 -mr-0.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Discover
