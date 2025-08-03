import React, { useState } from "react";
import "../index.css";
import { FaGithub, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Photo from "/images/photo.jpg";

export default function About() {
    const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);

    const togglePhotoExpansion = () => {
        setIsPhotoExpanded(!isPhotoExpanded);
    };

    return (
        <>
            {/* Zmieniono tło, aby kafelki były bardziej widoczne i dostosowano minimalną wysokość */}
            <div id="about" className="flex flex-col md:flex-row justify-center items-center min-h-[91vh] bg-slate-200 dark:bg-slate-800 text-gray-900 dark:text-gray-200 p-6 md:p-10">

                {/* Lewa sekcja ze zdjęciem */}
                <section
                    id="about-photo-1"
                    className="flex-1 flex items-center justify-center p-4"
                >
                    {/* Kontener zdjęcia o stałej, ograniczonej wysokości i szerokości, aby był większy */}
                
                        <img
                            src={Photo}
                            alt="Remigiusz Szabłowski - lewe zdjęcie"
                            onClick={togglePhotoExpansion}
                            className="w-full h-162  object-cover cursor-pointer transition-all duration-300 transform hover:scale-105 rounded-3xl"
                        />
                </section>

                {/* Prawa sekcja na treść */}
                <section
                    id="about-content"
                    className="flex-1 flex items-center justify-center p-4"
                >
                    {/* Kontener tekstu o stałej, ograniczonej wysokości i szerokości */}
                    <div className="bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 rounded-3xl p-10 shadow-xl max-w-sm max-h-[650px] text-center flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white">
                            Remigiusz Szabłowski
                        </h1>
                        <p className="text-gray-700 dark:text-gray-400 max-w-xs mx-auto">
                            I'm a Polish Student with huge ambition and amazing sense of humor. Database Manager and Website developer
                        </p>
                        
                        {/* Poprawiona sekcja z certyfikatami, umiejętnościami i hobby */}
                        <div className="mt-4 text-left w-full mx-auto max-w-xs">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4">Certifications:</h3>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
                                <li>INF.03 Exam</li>
                                <li>IC3 Spark</li>
                                <li>eJPT Certification</li>
                            </ul>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4">Skills:</h3>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
                                <li>HTML</li>
                                <li>PHP</li>
                                <li>MongoDB</li>
                                <li>NodeJs</li>
                                <li>AI</li>
                            </ul>
                            
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-4">Hobbies:</h3>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400">
                                <li>Working out at the gym</li>
                                <li>Travelling</li>
                                <li>Meeting new people</li>
                            </ul>
                        </div>
                        
                        <div className="flex justify-center space-x-6 mt-6 text-cyan-600 dark:text-cyan-400 text-3xl">
                            <a href="https://github.com/remuwson" aria-label="GitHub" className="hover:text-cyan-800 dark:hover:text-cyan-600">
                                <FaGithub />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100015056496045" aria-label="FaceBook" className="hover:text-cyan-800 dark:hover:text-cyan-600">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/r_szablowski/" aria-label="Instagram" className="hover:text-cyan-800 dark:hover:text-cyan-600">
                                <FaInstagram />
                            </a>
                            <a href="https://www.youtube.com/@remuuwa_7990" aria-label="YouTube" className="hover:text-cyan-800 dark:hover:text-cyan-600">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </section>

                {isPhotoExpanded && (
                    <div
                        className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex justify-center items-center p-4 cursor-zoom-out"
                        onClick={togglePhotoExpansion}
                    >
                        <img
                            src={Photo}
                            alt="Powiększone zdjęcie Remigiusza Szabłowskiego"
                            className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl animate-fade-in"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
