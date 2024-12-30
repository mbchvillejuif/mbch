import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';

// Importation des images
import apres from '../assets/img/realisation/avant2.jpg';
import avant from '../assets/img/realisation/avant2_0.jpg';
import apresPeinture from '../assets/img/realisation/apresPeinture.jpg';
import avantPeinture from '../assets/img/realisation/avantPeinture.jpg';
import apresToilette from '../assets/img/realisation/apresToilette.jpg';
import avantToilette from '../assets/img/realisation/avantToilette.jpg';    
import avant4 from '../assets/img/realisation/avant4.jpg';
import apres5 from '../assets/img/realisation/apres5.jpg';

const Portfolio = () => {
    return (
        <>
            <NavBar />
            <div className="w-full bg-[#c7d9d3] ">
                <br />
                <br />
                <div className="w-full bg-[#c7d9d3] py-16 px-4 ">
                    <div className="container mx-auto text-center" id='service'>
                        {/* Titre "Nos Services" */}
                        <br />
                        <br />
                        <h1 className="text-3xl font-bold mb-4"> Nos Réalisations</h1>
                        <br />
                        <br />

                        <div>
                            <Category title="Aménagement intérieur">
                                <div className="flex flex-wrap">
                                    <ImagePair before={avantToilette} after={apresToilette} />
                                    <ImagePair before={avant4} after={apres5} />
                                </div>
                            </Category>
                            <Category title="Peinture">
                                <div className="flex flex-wrap">
                                    <ImagePair before={avantPeinture} after={apresPeinture} />
                                </div>
                            </Category>
                            <Category title="Plomberie">
                                <div className="flex flex-wrap">
                                    <ImagePair before={avant} after={apres} />
                                </div>
                            </Category>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

const Category = ({ title, children }) => {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
}

const ImagePair = ({ before, after }) => {
    const [showAfterImage, setShowAfterImage] = useState(false);

    return (
        <div className="flex justify-center items-center gap-8">
            <div className="w-1/2">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-lg font-semibold mb-2">{showAfterImage ? "Après" : "Avant"}</h3>
                    <button onClick={() => setShowAfterImage(!showAfterImage)} className="w-24 p-2 ml-[40%] bg-[#049062] text-white">
                        {showAfterImage ? "Voir avant" : "Voir après"}
                    </button>
                </div>
            </div>
            <div className="w-1/2">
                {showAfterImage ? (
                    <>
                        <img src={after} alt="After" className="w-full h-auto object-cover max-w-xs" />
                    </>
                ) : (
                    <>
                        <img src={before} alt="Before" className="w-full h-auto object-cover max-w-xs" />
                    </>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
