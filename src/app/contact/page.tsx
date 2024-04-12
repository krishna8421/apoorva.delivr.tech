"use client";

import { motion } from "framer-motion";
import { syncopate } from "@/fonts";
import { sendEmailToMe } from "./actions";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
// import type { Metadata } from "next";
// import { SITE_NAME } from "@/constants";

// export const metadata: Metadata = {
//   title: `Contact | ${SITE_NAME}`,
// }

export default function ContactPage() {
  const { pending } = useFormStatus();

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
          className={`my-24 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          Get in touch
        </h2>
        <form
          action={async (formData) => {
            const res = await sendEmailToMe(formData);
            if (res.success) {
              toast.success("Message sent successfully");
            } else {
              if (res.isValidationError) {
                res.errors?.forEach((error) => {
                  toast.error(error);
                });
              } else {
                toast.error("Error sending message");
              }
            }
          }}
          className="space-y-10 mb-20 max-w-2xl mx-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium  text-gray-300"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
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
              name="email"
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
              name="message"
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg outline-none shadow-sm border bg-black border-gray-600 placeholder-gray-400 text-white "
              placeholder="Your message here"
              variants={inputVariants}
              whileFocus="focus"
            ></motion.textarea>
          </div>
          <Button
            size="lg"
            type="submit"
            isLoading={pending}
            className="bg-indigo-600/95 hover:bg-indigo-600 text-white font-bold py-3 w-full px-4 rounded-lg shadow-sm-light transition-all duration-200 ease-in-out hover:scale-105"
          >
            Send message
          </Button>
        </form>
      </div>
    </main>
  );
}
