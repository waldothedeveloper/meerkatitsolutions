import React from "react"
import yellowGirl from "../images/yellow-girl-1.jpeg"
import Menu from "./menu"

const Hero2 = () => {
  return (
    <div className="relative bg-blueGray-50">
      <main>
        <div
          className="bg-no-repeat bg-center bg-auto md:bg-cover"
          style={{ backgroundImage: `url(${yellowGirl})` }}
        >
          <Menu />
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:pb-48 lg:pt-20 lg:text-left">
            <div className="px-4 md:w-7/12 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-3xl tracking-tight font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl">
                <span className="block xl:inline text-yellow-800">
                  Managed IT Solutions &
                </span>

                <span className="block lg:hidden text-yellow-800">
                  &nbsp;Artificial Intelligence for <br />
                  <span className="text-lightBlue-500">Small Businesses</span>
                </span>
                <span className="hidden lg:block text-yellow-800">
                  Artificial Intelligence for &nbsp;
                  <span className="text-lightBlue-500 font-bold text-5xl">
                    Small Businesses
                  </span>
                </span>
              </h1>
              <p className="mt-3 max-w-sm mx-auto text-lg text-gray-600 font-semibold sm:text-xl md:mt-5 lg:max-w-3xl">
                We make IT happen for any small biz that is ready to grow smart
                and fast.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-lightBlue-600 hover:bg-lightBlue-500 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
              </div>
              {/* Rating */}
              <div className="mt-16">
                <div className="inline-flex items-center divide-x divide-yellow-100">
                  <div className="flex-shrink-0 flex pr-5">
                    {/* Heroicon name: star */}
                    <svg
                      className="h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: star */}
                    <svg
                      className="h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: star */}
                    <svg
                      className="h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: star */}
                    <svg
                      className="h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {/* Heroicon name: star */}
                    <svg
                      className="h-5 w-5 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-yellow-700 sm:py-3 font-semibold">
                    <span className="font-semibold text-gray-800">
                      Rated 5 stars
                    </span>{" "}
                    by over{" "}
                    <span className="font-bold text-blue-500">
                      120 biz owners
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* maybe here? */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero2
