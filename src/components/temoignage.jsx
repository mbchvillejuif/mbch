import React from 'react';

import Temoin1 from '../assets/img/amen_inter/amen_inter-temoignage1.jpg';
import Temoin2 from '../assets/img/amen_inter/amen_inter-temoignage3.png';

const Temoignage = () => {
    return (
        <div className="bg-black min-h-screen text-white p-4">
            <h1 className="text-3xl md:text-4xl mb-6 text-center">Avis des clients</h1>
           
            {/* Section for Stéphane's testimonial and image on the right */}
            <div className="mb-8 md:flex md:items-center md:justify-around md:flex-row-reverse">
                <div className="md:flex-1 text-center mb-4 md:mb-0">
                    <div className="p-4 border-2 border-white rounded-lg">
                        <p className="text-lg font-bold transition-transform duration-700 hover:scale-110" style={{ color: '#FABD2F' }}>
                            Stéphane
                        </p>
                        <p className="italic transition-all duration-700 hover:scale-110">Je recommande vivement MBCH. Leur équipe a rénové mon intérieur rapidement et avec un souci du détail remarquable. Qualité et professionnalisme étaient au rendez-vous !</p>

                    </div>
                </div>
                <div className="md:flex-1 flex justify-center">
                    <img
                        src={Temoin1}
                        alt="Temoignage 1"
                        className="object-contain max-w-xs md:max-w-sm"
                    />
                </div>
            </div>

            {/* Section for Laure's testimonial and image on the left */}
            <div className="md:flex md:items-center md:justify-around">
                <div className="md:flex-1 text-center mb-4 md:mb-0">
                    <div className="p-4 border-2 border-white rounded-lg">
                        <p className="text-lg font-bold transition-transform duration-700 hover:scale-110" style={{ color: '#FABD2F' }}>
                            Laure
                        </p>
                        <p className="italic transition-all duration-700 hover:scale-110">J'ai été éblouie par l'excellence de MBCH. Leur équipe a non seulement transformé mon espace de vie avec une peinture impeccable et des finitions soignées, mais a aussi su écouter et respecter mes souhaits, me guidant avec professionnalisme tout au long du projet. Leur attention aux détails et leur engagement envers la qualité sont vraiment hors pair. Un service exceptionnel !</p>

                    </div>
                </div>
                <div className="md:flex-1 flex justify-center">
                    <img
                        src={Temoin2}
                        alt="Temoignage 2"
                        className="object-contain max-w-xs md:max-w-sm"
                    />
                </div>
            </div>
        </div>
    );
}

export default Temoignage;
