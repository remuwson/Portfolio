import React from "react";

export default function Resume() {
    return(
        <>
<section
        id="resume"
        className="py-16 px-6 bg-gray-200 dark:bg-gray-900/60 text-center"
      >
        <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">Resumé</h2>
        <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 mb-6">
          You can download my full resumé here.
        </p>
        <a
          href="#"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition"
        >
          Download Resumé
        </a>
      </section>
      </>
    );
}