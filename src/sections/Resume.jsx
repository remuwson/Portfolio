import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import ReactMarkdown from "react-markdown";
import { FaArrowRight } from "react-icons/fa";
import "../App.css";
import useOnScreen from "../Scripts/useOnScreen";

export default function Resume() {
    // Stan do kontrolowania widoczności zakładek
    const [showPolishResume, setShowPolishResume] = useState(false);
    const [showEnglishResume, setShowEnglishResume] = useState(false);
    
    // Użycie hooka do obserwowania widoczności głównej sekcji Resume
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    // Funkcje do przełączania widoczności
    const togglePolishResume = () => {
        setShowPolishResume(!showPolishResume);
        setShowEnglishResume(false);
    };

    const toggleEnglishResume = () => {
        setShowEnglishResume(!showEnglishResume);
        setShowPolishResume(false);
    };

    // Angielski tekst CV z przesłanego pliku w formacie Markdown
    const cvTextEn = `
### REMIGIUSZ SZABŁOWSKI

**E-mail:** remigiuszablowski@gmail.com

**Phone:** +48 796 818 063

**Date of Birth:** 26.06.2006

**Location:** Szczecin, Poland

My career aspirations are focused on expanding the skills I already possess, gaining new experience, and becoming familiar with various tools. I am fully committed to the tasks entrusted to me, which helps me achieve success.

### WORK EXPERIENCE
01.2023-05.2023 -
Intern - Perfekt Instal Szczecin

09.2024- 10.2024 - 
Intern - PETROSOFT PC Solution

### SKILLS
* Computer maintance
* Website development
* Database management

### EDUCATION
09.2021 - Present

Szczecińskie Collegium Informatyczne SCI

Level: Secondary education

Specialization: Cybersecurity

### LANGUAGES
* English: Intermediate
* Polish: Native

### COURSES & CERTIFICATIONS
* eJPT- Junior Penetration Tester - December 2023
* IC3 Spark Certification - January 2022
* Driver License - December 2024

### HOBBIES
I enjoy playing team sports such as basketball and have been going to the gym for a long time. I consider myself quite athletic. Besides sports, I also enjoy learning new things and constantly expanding my knowledge.
    `;
    
    // Polski tekst CV z przesłanego pliku w formacie Markdown
    const cvTextPl = `
### REMIGIUSZ SZABŁOWSKI

**E-mail:** remigiuszablowski@gmail.com

**Telefon:** +48 796 818 063

**Data urodzenia:** 26.06.2006

**Miejscowość:** Szczecin

Moje aspiracje zawodowe są związane z poszerzaniem umiejętności, które posiadam oraz zdobywaniem nowych doświadczeń i poznaniem narzędzi. Jestem w pełni zaangażowany w powierzone mi zadania, dzięki którym mogę osiągnąć sukces.

### DOŚWIADCZENIE ZAWODOWE
01.2023-05.2023 -
Stażysta Perfekt Instal | Szczecin

09.2024- 10.2024 -
Stażysta PETROSOFT PC Solution

### UMIEJĘTNOŚCI
* Montaż komputera oraz jego eksploatacja
* Tworzenie stron internetowych
* Zarządzanie bazami danych

### WYKSZTAŁCENIE
09.2021 - obecnie   
Szczecińskie Collegium Informatyczne SCI

Specjalizacja: Cyberbezpieczeństwo

Poziom wykształcenia: średnie


### JĘZYKI
* Angielski: poziom średnio zaawansowany
* Polski: poziom ojczysty

### SZKOLENIA, KURSY, CERTYFIKATY
* eJPT - Junior Penetration Tester (12.2023)
* IC3 Spark (01.2022)
* Prawo jazdy kat. B (12.2024)

### ZAINTERESOWANIA
* Jazda na snowboardzie
* Ćwiczenia na siłowni
* Podróżowanie
* Poznawanie nowych ludzi
    `;

    // Komponent renderujący elementy listy z ikoną strzałki
    const renderers = {
        li: ({ children }) => (
            <li className="flex items-start mb-1 text-gray-700 dark:text-gray-300">
                <FaArrowRight className="mt-1 mr-2 flex-shrink-0 text-cyan-500" />
                {children}
            </li>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white border-b-2 border-cyan-500 pb-1">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="text-gray-700 dark:text-gray-300 my-2">
                {children}
            </p>
        )
    };

    return(
        <>
            <section
                id="resumé"
                className={`py-16 px-6 bg-gray-200 dark:bg-gray-900/60 text-center fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
                ref={ref}
            >
                <h2 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">Resumé</h2>
                <p className="max-w-xl mx-auto text-gray-700 dark:text-gray-300 mb-6">
                    You can see my full resumé here.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <button
                        onClick={togglePolishResume}
                        className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition mr-0 md:mr-4 mb-4 md:mb-0"
                    >
                        {/* Dodano prop "svg" aby flaga się wyświetlała */}
                        <ReactCountryFlag countryCode="PL" svg className="mr-2" />
                        Polish Resumé
                    </button>
                    <button
                        onClick={toggleEnglishResume}
                        className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition"
                    >
                        {/* Dodano prop "svg" aby flaga się wyświetlała */}
                        <ReactCountryFlag countryCode="GB" svg className="mr-2" />
                        English Resumé
                    </button>
                </div>

                {/* Sekcja z tekstem CV w języku polskim, warunkowo wyświetlana */}
                {showPolishResume && (
                    <div className="mt-8 mx-auto max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl text-left transition-all duration-500 ease-in-out transform fade-in-slide-down">
                         <ReactMarkdown components={renderers}>
                            {cvTextPl}
                        </ReactMarkdown>
                    </div>
                )}
                
                {/* Sekcja z tekstem angielskiego CV, warunkowo wyświetlana */}
                {showEnglishResume && (
                    <div className="mt-8 mx-auto max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl text-left transition-all duration-500 ease-in-out transform fade-in-slide-down">
                         <ReactMarkdown components={renderers}>
                            {cvTextEn}
                        </ReactMarkdown>
                    </div>
                )}

            </section>
        </>
    );
}
