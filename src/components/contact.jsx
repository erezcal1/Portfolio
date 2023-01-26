import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/fb9580c9-07a0-4a16-ab89-0c6c5e4c7e59"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit the from below</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex items-center mx-auto">
          Let's Talk About Work
        </button>
      </form>
    </div>
  );
};

export default Contact;
