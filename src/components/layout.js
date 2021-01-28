import React from "react"
import PropTypes from "prop-types"
import "../css/global.css"
import Discover from "./discover"
import Hero2 from "./hero2"
// import ManagedITServices from "./managedITservices"
// import TrustedBrands from "./trusted-brands"
import ScheduleCall from "./schedule-call"
import Pricing from "./pricing"
import Services from "./services"
import ContactUs from "./contact"
// import Testimonials from "./testimonials"
// import FAQs from "./faqs"
import TrustedBy from "./trustedBy"
import FrequentlyAskedQuestions from "./frequently-asked-questions"
import Footer from "./footer"

const Layout = () => {
  return (
    <>
      <Hero2 />
      <Discover />
      {/* <TrustedBrands /> */}
      {/* <ScheduleCall /> */}
      <ContactUs />
      <Services />
      <Pricing />
      <TrustedBy />
      <FrequentlyAskedQuestions />
      {/* <Testimonials /> */}
      {/* <FAQs /> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
