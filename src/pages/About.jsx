import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever Was Born Out Of A Passion For Innovation And A Desire To
            Revolutionize The Way People Shop Online. Our Journey Began With A
            Simple Idea: To Provide A Platform Where Customers Can Seamlessly
            Discover, Explore, And Purchase A Wide Range Of Products From The
            Comfort Of Their Homes.
          </p>
          <p>
            Since Our Inception, We've Worked Tirelessly To Curate A Diverse
            Selection Of High-Quality Products That Cater To Every Taste And
            Preference. From Fashion And Beauty To Electronics And Home
            Essentials, We Offer An Extensive Collection Sourced From Trusted
            Brands And Suppliers.
          </p>
          <b className="text-gray-800">Our Mision</b>
          <p>
            Our Mission At Forever Is To Empower Customers With Choice,
            Convenience, And Confidence. We Strive To Create A Shopping
            Experience That Exceeds Expectations, From Browsing And Ordering To
            Delivery And Beyond.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-100 transition-colors cursor-pointer">
          <b>QUALITY ASSURANCE:</b>
          <p className="text-gray-600">
            We Meticulously Select And Vet Each Product to Ensure It Meets Our
            Stringent Quality Standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-100 transition-colors cursor-pointer">
          <b>CONVENIENCE:</b>
          <p className="text-gray-600">
            Wth Our User-Friendly Interface And Streamlined Ordering Process,
            Shopping Has Never Been Easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-100 transition-colors cursor-pointer">
          <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
          <p className="text-gray-600">
            Our Team Of Dedicated Professionals Is Here To Assist You Every
            Step, Ensuring Your Satisfaction Is Our Top Priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
