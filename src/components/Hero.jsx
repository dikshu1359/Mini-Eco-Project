import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Mini-Eco =
            <br className="hidden lg:inline-block" />
            Your One-Stop Shop for Everyday Essentials
          </h1>
          <p className="mb-8 leading-relaxed">
            Step into Mini-Eco, your ultimate online destination for everything from the latest electronics and stylish fashion to must-have home essentials and unique daily deals. Whether you're Browse for trusted brands or discovering hidden gems, Mini Ama brings you a curated collection of high-quality products at prices you’ll love.

            Designed for ease and speed, our platform gives you a smooth and secure shopping experience — complete with powerful search, smart filters, personalized recommendations, and fast checkout. We’re here to help you save time and money, all while enjoying a delightful Browse journey.

            From your morning coffee gadgets to midnight beauty finds, Mini Ama has it all. Plus, with lightning-fast delivery and responsive customer support, shopping has never been more convenient or rewarding.

            So go ahead — explore, compare, and shop with confidence.
            Mini-Eco isn’t just a store — it’s your smarter way to shop online.
          </p>
          <div className="flex justify-center">
            {/* Corrected "Sign in" button with Link */}
            <Link href="/signin" passHref legacyBehavior>
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Sign in
              </button>
            </Link>

            {/* Corrected "Sign up" button with Link */}
            <Link href="/signup" passHref legacyBehavior>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Sign up
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;