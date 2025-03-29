import React, { useState } from "react";
import { assets } from '@/assets/assets';
import Image from "next/image";


export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3aee3cc3-aec3-4b55-9b95-5cd4390a70fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/footer-bg-color.png')",
          backgroundSize: "90% auto",
        }}
      >
        <h4 className="text-center mb-2 text-lg font-ovo">Connect With Me</h4>
        <h3 className="text-center text-5xl font-ovo">Get In Touch</h3>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          I have a strong background in HTML, CSS, JavaScript and React.js. I am
          always eager to learn and improve my skills.
        </p>

        <form onSubmit={onSubmit} className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full flex-1 mb-6 p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          ></textarea>
          <button
            type="submit"
            className="px-8 py-3 flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 cursor-pointer"
          >
            Send Message{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />{" "}
          </button>
          <p className="text-center text-sm mt-4 text-gray-500">{result}</p>
        </form>
      </div>
    </>
  );
}
