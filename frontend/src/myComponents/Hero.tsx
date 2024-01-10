import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="bg-secondary px-[3.2rem] pb-[6.4rem]  pt-[2.4rem] sm:py-[9.6rem]">
        <div className="mx-auto grid max-w-[120rem] grid-cols-1 items-center py-[3.2rem] sm:gap-[4.8rem] md:gap-[6.4rem] md:py-[0.8rem] lg:grid-cols-2 lg:gap-[9.6rem] xl:max-w-[130rem] ">
          <div className="text-center lg:text-left">
            <h1 className="font-custom mb-[3.2rem] text-[4.2rem] font-bold leading-[1.05] tracking-[-0.5px] text-[#333] xl:text-[4.8rem] ">
              Farmers' yields, cold-stored for freshness and swift distribution.
            </h1>
            <p className="font-custom mb-[4.8rem] text-[2rem] font-normal leading-[1.6] ">
              Elevate farmers' well-being with a personalized cold storage
              subscription, offering flexibility to access crops at their
              convenience for a continuous supply of healthful harvests, 365
              days a year.
            </p>
            <Link to="#">
              <a className="font-custom mr-[1rem] inline-block rounded-[9px] bg-primary px-[2.4rem] py-[1.6rem] text-[2rem] font-semibold  text-secondary hover:bg-primary/80 sm:mr-[1.6rem] sm:px-[3.2rem] sm:py-[1.6rem] ">
                Start storing
              </a>
              <a className="font-custom ml-[1rem] inline-block rounded-[9px] bg-primary px-[2.4rem] py-[1.6rem] text-[2rem] font-semibold  text-secondary hover:bg-primary/80 sm:ml-[1.6rem] sm:px-[3.2rem] sm:py-[1.6rem]">
                Learn more &darr;
              </a>
            </Link>

            <div className="delivered-meals mt-[4rem] flex items-center justify-center gap-[1.6rem] lg:mt-[8rem]  ">
              <div className="delivered-imgs flex">
                <img
                  className="mr-[-1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9] "
                  src="./customers/customer-1.jpg"
                  alt="Customer photo"
                />
                <img
                  className="mr-[-1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9] "
                  src="./customers/customer-2.jpg"
                  alt="Customer photo"
                />
                <img
                  className="mr-[-1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9] "
                  src="./customers/customer-3.jpg"
                  alt="Customer photo"
                />
                <img
                  className="mr-[-1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9] "
                  src="./customers/customer-4.jpg"
                  alt="Customer photo"
                />
                <img
                  className="mr-[-1.6rem] h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9] "
                  src="./customers/customer-5.jpg"
                  alt="Customer photo"
                />
                <img
                  className=" h-[4.8rem] w-[4.8rem] rounded-full border-[3px] border-solid border-[#fdf2e9] "
                  src="./customers/customer-6.jpg"
                  alt="Customer photo"
                />
              </div>
              <p className=" delivered-text ml-16 text-[1.8rem] font-semibold sm:ml-0">
                <span className="font-bold text-primary">250,000+</span> farmers
                joined last year!
              </p>
            </div>
          </div>
          <div className="">
            <picture className="align-center  mt-[3.2rem] flex justify-center lg:mt-0 ">
              <source src="./hero.webp" type="image/webp" />
              <source src="./hero-min.png" type="image/png" />

              <img
                src="./hero-min.png"
                className="w-[60%]  lg:w-[100%]"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
