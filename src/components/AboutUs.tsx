import About from '@/assets/images/bg-about.png'
export default function AboutUs() {
  return (
    <div className="2xl:px-220 2xl:mt-250 lg:mt-200 lg:flex lg:px-7 sm:mt-180 mt-200">
      <div className="flex items-center justify-center mt-[60px] mb-[60px]">
        <div className="ml-10">
          <img src={About} alt="About" className="w-[530px] h-[471px]" />
        </div>
        <div className="ml-[90px]">
          <h1 className="w-[356px] h-[56px] text-5xl text-darkBlue font-bold">
            About us
          </h1>
          <p className="w-[352px] h-[447px] text-darkBlue text-lg">
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
