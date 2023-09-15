import About from '@/assets/images/bg-about.png'
export default function AboutUs() {
  return (
    <div className="2xl:px-220 2xl:mt-250 lg:mt-200 lg:flex lg:px-7 sm:mt-180 mt-200">
      <div className="flex items-center justify-center mt-16 mb-16">
        <div className="ml-10">
          <img src={About} alt="About" className="w-530 h-470" />
        </div>
        <div className="ml-24">
          <h1 className="text-5xl font-bold w-352 h-14 text-darkBlue">
            About us
          </h1>
          <p className="text-lg w-352 h-447 text-darkBlue">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice.
            <br />
            <br />
            We have a connection to all banks on the Slovak market, so we can
            solve everything under one roof. By constantly innovating our
            business activities, we move forward and we are able to offer truly
            <br />
            above-standard services that set us apart from the competition.
          </p>
        </div>
      </div>
    </div>
  )
}
