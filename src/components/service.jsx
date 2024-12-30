import React from 'react';
import plomberie from '../assets/img/plomberie/plomberie-1.png';
import peinture from '../assets/img/peinture/peinture-1.png';
import amen from '../assets/img/amen_inter/amen_inter-1.png';



const Service = () => {
    return (
        <div id="service" className="w-full bg-[#c7d9d3] ">
            <br/>
            <br/>
            
            <div  className="w-full bg-[#c7d9d3] py-16 px-4 ">
                <br/>
                <br/>
                <br/>
                <div className="container mx-auto text-center" id='service'>
                    {/* Titre "Nos Services" */}
                    <br/>
                    <br/>
                    <h1 className="text-3xl font-bold mb-4">Nos Services</h1>

                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Première div */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                            <img src={plomberie} alt="Service 1" className="w-full h-auto mb-2 max-w-xs mx-auto sm:w-full" />
                            <h2 className="text-lg font-bold">Plomberie</h2>
                            <br/>
                            <p>Chez nous, on vous propose des services de plomberie pour s'assurer que tous vos besoins soient pris en charge.</p>
                        </div>
                        
                        {/* Deuxième div */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                            <img src={peinture} alt="Service 2" className="w-full h-auto mb-2 max-w-xs mx-auto sm:w-full" />
                            <h2 className="text-lg font-bold">Peinture</h2>
                            <br/>
                            <p>Transformez votre espace avec notre service de rénovation haut de gamme.</p>
                        </div>

                        {/* Troisième div */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
                            <img src={amen} alt="Service 3" className="w-full h-auto mb-2 max-w-xs mx-auto sm:w-full" />
                            <h2 className="text-lg font-bold">Aménagement intérieur</h2>
                            <br/>
                            <p>Réalisez votre rêve avec l'aide de notre équipe d'experts en construction pour vos salles de bains, cuisines et parquets. Nous sommes là pour concrétiser vos idées et transformer votre espace selon vos souhaits.</p>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Service;