import React from "react"
// import PropTypes from "prop-types"

const ManagedITServices = () => {
  return (
    <div className="py-12 bg-blueGray-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="space-y-32 my-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-blueGray-200">
              An overview of our Managed IT Services
            </h2>
          </div>
        </div>
        <dl className="md:grid md:grid-cols-2 md:gap-12 lg:grid lg:grid-cols-3 lg:gap-4">
          <div className="md:mt-16 lg:mt-32 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <div>
              <img
                className="object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                alt="network and routing"
              />
            </div>

            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-blueGray-200">
                Network & Routing
              </dt>
              <dd className="mt-4 text-base text-blueGray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div className="md:mt-8 lg:mt-24 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <div>
              <img
                className="object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1558009250-d3d2229fdf28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=264&h=354&q=80"
                alt="printing and imaging devices"
              />
            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-blueGray-200">
                Printing & Imaging Devices
              </dt>
              <dd className="mt-4 text-base text-blueGray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div className="md:mt-16 lg:mt-16 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <div>
              <img
                className="object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1524860769472-246b6afea403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=264&h=354&q=80"
                alt="virus and security"
              />
            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-blueGray-200">
                Virus & Security
              </dt>
              <dd className="mt-4 text-base text-blueGray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="md:mt-8 lg:mt-32 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <div>
              <img
                className="object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1562414962-a6b4f966070d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=264&h=354&q=80"
                alt="cloud and backups"
              />
            </div>

            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-blueGray-200">
                Cloud Backups
              </dt>
              <dd className="mt-4 text-base text-blueGray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div className="md:mt-16 lg:mt-24 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <div>
              <img
                className="object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=264&h=354&q=80"
                alt="operating systems"
              />
            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-blueGray-200">
                Operating Systems
              </dt>
              <dd className="mt-4 text-base text-blueGray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>

          <div className="md:mt-8 lg:mt-16 max-w-xs mx-auto mb-24 sm:mb-24 md:mb-0">
            <div>
              <img
                className="object-cover shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=264&h=354&q=80"
                alt="software and office 365"
              />
            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-blueGray-200">
                Software & Office 365
              </dt>
              <dd className="mt-4 text-base text-blueGray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ManagedITServices
