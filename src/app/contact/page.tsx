"use client";

import { motion } from "framer-motion";
import { syncopate } from "@/fonts";

export default function ContactPage() {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#3b82f6",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <main className="">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2
          className={`m-8 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          Get in touch
        </h2>
        <form action="#" className="space-y-8 px-6 md:px-10">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm outline-none bg-black border-gray-600 placeholder-gray-400 text-white  shadow-sm-light"
              placeholder="Your name"
              required
              variants={inputVariants}
              whileFocus="focus"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <motion.input
              type="email"
              id="email"
              className="shadow-sm border text-sm rounded-lg outline-none  block w-full p-2.5 bg-black border-gray-600 placeholder-gray-400 text-white  shadow-sm-light"
              placeholder="Your email address"
              required
              variants={inputVariants}
              whileFocus="focus"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <motion.textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg outline-none shadow-sm border bg-black border-gray-600 placeholder-gray-400 text-white "
              placeholder="Your message here"
              variants={inputVariants}
              whileFocus="focus"
            ></motion.textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-indigo-600/95 hover:bg-indigo-600 text-white font-bold py-3 w-full px-4 rounded-lg focus:outline-none focus:shadow-outline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send message
          </motion.button>
        </form>
      </div>
    </main>
  );
}
