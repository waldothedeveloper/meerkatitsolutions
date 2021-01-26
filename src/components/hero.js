import React from "react"
import logo from "../images/Meerkat-LOGO.png"

const Hero = () => {
  return (
    <div className="relative bg-yellow-400">
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a className="flex items-center" href="/" aria-label="Home">
                <img className="h-12 w-auto" src={logo} alt="Logo" />
                <div className="px-4 font-bold tracking-tight uppercase text-sm">
                  Meerkat <span className="text-blue-600">IT Solutions</span>
                </div>
              </a>
            </div>
          </div>
        </nav>
        {/* small screens */}
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-12 w-10" src={logo} alt="Logo" />
            </div>
          </div>
        </div>

        <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          {/* "lg:grid lg:grid-cols-12 lg:gap-8" */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-xl md:mx-auto lg:text-left md:col-span-5">
              {/* <div className="font-semibold uppercase tracking-wide text-orange-900 text-xs md:text-sm">
              Coming soon
            </div> */}
              <h2 className="mt-1 text-3xl tracking-normal leading-10 font-extrabold text-gray-50 sm:leading-none lg:text-5xl">
                Managed IT Solutions & Artificial Intelligence for Small
                Businesses
              </h2>
              <p className="mt-3 text-base text-gray-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We make IT happen for any small biz that's ready to grow smart,
                and fast.
              </p>
              <div className="rounded-md w-48 shadow my-12">
                <a
                  href="#"
                  className="font-semibold flex items-center justify-center py-3 border border-transparent text-base leading-6 rounded-md text-yellow-500 bg-gray-50 hover:bg-yellow-100 focus:outline-none focus:border-yellow-200 focus:ring-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8"
                >
                  Get started
                </a>
              </div>
            </div>

            <div
              // style={{ maxHeight: 637 }}
              className="relative md:col-span-7"
            >
              <div className="flex">
                {/* medium and up */}
                <img
                  className="px-1 hidden md:block"
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=255&q=80"
                  alt="Business people thinking"
                />
                {/* small */}
                <img
                  className="px-1 md:hidden"
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=max&w=120&q=80"
                  alt="Business people thinking"
                />

                <div className="flex-col">
                  <div className="flex">
                    {/* small */}
                    <img
                      className="px-1 md:hidden"
                      src="https://images.unsplash.com/photo-1469833120660-1a218b53d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=120&h=150&q=80"
                      alt="Old man working"
                    />
                    <img
                      className="px-1 md:hidden"
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=clamp&w=120&h=150&q=80"
                      alt="Meeting"
                    />
                    {/* medium and up */}
                    <img
                      className="px-1 hidden md:block"
                      src="https://images.unsplash.com/photo-1469833120660-1a218b53d28a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=216&h=347&q=80"
                      alt="Old man working"
                    />
                    <img
                      className="px-1 hidden md:block"
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=216&h=347&q=80"
                      alt="Meeting"
                    />
                  </div>
                  {/* medium and up */}
                  <img
                    className="px-1 pt-2 hidden md:block"
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80"
                    alt="Meeting"
                  />
                  {/* small */}
                  <img
                    className="px-0.5 pt-2 md:hidden"
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80"
                    alt="Meeting"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero
