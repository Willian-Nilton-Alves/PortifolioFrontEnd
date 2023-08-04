import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#010F09] flex justify-center items-center p-3"
    >
      <form
        method="POST"
        action="https://getform.io/f/0307fdfb-7e8e-48f1-90ed-26c6ccc3c5a5"
        className="flex flex-col max-w-[500px] w-full"
      >
        <div className="mt-1">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // send an e-mail - willianph95@gmail.com
          </p>
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
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
