import React from "react"
import Menu from "../components/menu"
import Footer from "../components/footer"

const About = () => {
  return (
    <>
      <Menu />
      <div className="max-w-5xl mx-auto my-48">
        <div className="max-w-screen mx-auto mb-32">
          <h2 className="block text-4xl tracking-tight font-extrabold text-blueGray-600 sm:text-5xl md:text-6xl">
            <span className="text-7xl tracking-tight block xl:inline">
              We unlock technology freedom for
            </span>{" "}
            <span className="text-yellow-500 text-7xl tracking-tight block xl:inline">
              small biz
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {/* our vision */}
          <div className="my-4 grid gap-4 grid-cols-2">
            <p className="text-blueGray-400 font-semibold text-xl">
              Our vision
            </p>
            <p className="text-blueGray-600">
              Plaid is focused on democratizing financial services through
              technology. We build beautiful consumer experiences,
              developer-friendly infrastructure, and intelligent tools that give
              everyone the ability to create amazing products that solve big
              problems.
            </p>
          </div>

          {/* our business */}
          <div className="my-4 grid gap-4 grid-cols-2">
            <p className="text-blueGray-400 font-semibold text-xl">
              Our business
            </p>
            <p className="text-blueGray-600">
              We started out by building the technical infrastructure APIs that
              connect consumers, traditional financial institutions, and
              developers. Today, we add key insights to the data access we
              provide with our suite of analytics products.
            </p>
          </div>

          {/* Stats  */}

          {/* This example requires Tailwind CSS v2.0+ */}
          <div className="my-32">
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div>
                <div className="px-4 py-5 sm:p-6">
                  <dt
                    style={{ color: "transparent" }}
                    className="bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-500 text-4xl font-medium"
                  >
                    Happy clients
                  </dt>
                  <dd
                    style={{ color: "transparent" }}
                    className="mt-1 text-3xl font-semibold bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-500"
                  >
                    120
                  </dd>
                </div>
              </div>

              <div>
                <div className="px-4 py-5 sm:p-6">
                  <dt
                    style={{ color: "transparent" }}
                    className="bg-clip-text bg-gradient-to-r from-yellow-300 to-blue-500 text-4xl font-medium"
                  >
                    Offices
                  </dt>
                  <dd
                    style={{ color: "transparent" }}
                    className="mt-1 text-3xl font-semibold bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-500"
                  >
                    3
                  </dd>
                </div>
              </div>

              <div>
                <div className="px-4 py-5 sm:p-6">
                  <dt
                    style={{ color: "transparent" }}
                    className="bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-500 text-4xl font-medium"
                  >
                    Projects
                  </dt>
                  <dd
                    style={{ color: "transparent" }}
                    className="mt-1 text-3xl font-semibold bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-500"
                  >
                    200
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* our culture */}
          <div className="my-4 grid gap-4 grid-cols-2">
            <p className="text-blueGray-400 font-semibold text-xl">
              Our culture
            </p>
            <p className="text-blueGray-600">
              We value cross-team collaboration and diversity of thought.
              There's always an opportunity to learn from each other outside of
              day-to-day work, whether it's company-wide offsites, internal
              hackathons, or co-worker meetups.
            </p>
          </div>

          {/* our people */}
          <div className="my-4 grid gap-4 grid-cols-2">
            <p className="text-blueGray-400 font-semibold text-xl">
              Our people
            </p>
            <p className="text-blueGray-600">
              We have diverse backgrounds and skills, but we're all passionate
              about building a more efficient and inclusive financial
              infrastructure—together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
