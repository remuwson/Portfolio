import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function Resume() {
    return(
        <>
            <section
                id="resumé"
                className="py-16 px-6 bg-gray-200 dark:bg-gray-900/60 text-center"
            >
                <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">Resumé</h2>
                <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 mb-6">
                    You can see my full resumé here.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition mr-0 md:mr-4 mb-4 md:mb-0"
                    >
                        {/* Dodano prop "svg" aby flaga się wyświetlała */}
                        <ReactCountryFlag countryCode="PL" svg className="mr-2" />
                        Polish Resumé
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition"
                    >
                        {/* Dodano prop "svg" aby flaga się wyświetlała */}
                        <ReactCountryFlag countryCode="GB" svg className="mr-2" />
                        English Resumé
                    </a>
                </div>
            </section>
        </>
    );
}
