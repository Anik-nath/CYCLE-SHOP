import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  toast.configure()
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znpp15k",
        "template_8bab8tf",
        form.current,
        "N87Zj5ajsu4Ybm0NV"
      )
      .then(
        (result) => {
          toast("You send your feedback! Thank you", { type: "success" });
        },
        (error) => {
          toast("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="pt-16 mx-auto">
        <div className="head-banner mb-8">
          <div className="container mx-auto">
            <div className="banner-inner flex flex-col justify-center items-center">
              <h1 className="banner-title font-bold text-3xl text-white">
                <span className="uppercase">Contact Us</span>
              </h1>
              <div className="text-white pt-1">
                <a
                  className="hover:text-green-500 cursor-pointer font-semibold"
                  href="!"
                >
                  Home
                </a>{" "}
                / <span className="text-green-500 font-semibold">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main content  start*/}
      <div className="container mx-auto px-6 md:px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:-mt-16 mt-0">
          <div className="shadow-lg bg-white p-4 flex flex-col justify-center items-center gap-y-4">
            <i className="fas fa-phone text-3xl"></i>
            <h2 className="text-2xl font-semibold text-gray-700">
              Talk to Sales
            </h2>
            <p className="w-1/2 mx-auto text-justify">
              Interested in this software? Just pick up the phone to chat with a
              member of our sales team.
            </p>
            <h2 className="bg-green-500 text-white p-2">+880 123 456 789</h2>
          </div>
          <div className="shadow-lg bg-white p-4 flex flex-col justify-center items-center gap-y-4">
            <i className="fas fa-comments text-3xl"></i>
            <h2 className="text-2xl font-semibold text-gray-700">
              Contact Customer Support
            </h2>
            <p className="w-1/2 mx-auto text-justify">
              Sometimes you need a little help from your friends. Or a HubSpot
              support rep. Dont worry… we are here for you.
            </p>
            <button className="bg-green-500 px-4 text-white py-2">
              Chat With Us
            </button>
          </div>
        </div>
        {/* find office */}
        <div className="py-8" id="office">
          <h2 className="text-3xl font-semibold text-center py-8 mt-8 text-gray-700 capitalize">
            how to find office
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 bg-gray-100 pb-4 md:pb-0">
            <div className="w-full">
              <img
                className="w-full"
                src="https://i.ibb.co/pv3mHnR/singapore.jpg"
                alt="office"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl">Portsmouth, NH (CTG Office)</h3>
                <div className="flex flex-col gap-y-2 my-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Address
                  </h3>
                  <p className="w-2/4 md:text-justify text-lg mx-auto md:mx-0">
                    1 Harbour Pl, Suite 175Portsmouth, NH 03801 Bangladesh
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
                <p className="text-lg pt-2">+123 647 895</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-8" id="global">
          <h2 className="text-3xl font-semibold text-center text-gray-700 py-8 mt-8 capitalize">
            Connect with one of our global offices
          </h2>
          {/* contact + map */}
          <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="map"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123745.4450570736!2d90.84753881136399!3d22.307341193668282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1649021120710!5m2!1sen!2sbd"
              ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-1 shadow-lg"
              >
                <h2 className="text-gray-900 text-lg mb-1 font-semibold title-font">
                  Get In Touch
                </h2>
                <div className="relative mb-4">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Send
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  After press send button ,check your Email. We try to reach you
                  as soon as possible.
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
