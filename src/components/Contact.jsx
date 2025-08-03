import React from "react";
export default function Contact(){
    return(
        <>
     <section id="contact" className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">Contact</h2>
        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-400 mb-6">
          Feel free to send any messages or come up with ideas. I will try to answer as soon as possible.
        </p>
        <a
          href="mailto:remigiuszablowski@gmail.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Send Email
        </a>
      </section>
      </>
      );
}