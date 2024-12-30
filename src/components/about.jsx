import React from 'react';


//on va faire a propos de nous

const About = () => {
    return (
        
        <div className="text-center mt-10">
        {/* on met de la decoration pour le titre */}
        <br/>
        <br/>
        <div className="bg-green-500 h-1 w-1/4 mx-auto mt-10 mb-2"></div>
        <span className="text-decoration-underline text-decoration-thick border-bottom">
        <br/>
            <h1 className="display-2 mb-5  font-weight-bold text-2xl">À PROPOS DE NOUS</h1>
        </span>
        {/* on met de l'espace entre le titre et le paragraphe */}
        <br/>
    
        <p className="lead">
  MBCH se spécialise dans la transformation de vos espaces, offrant expertise en plomberie, peinture, et aménagement intérieur.<br /><br />
  Notre équipe s'attache à comprendre vos besoins pour créer des environnements qui allient beauté et fonctionnalité.<br /><br />
  Nous visons l'excellence, en assurant la qualité et le respect des délais, pour que chaque projet reflète votre style et réponde à vos attentes.<br />
</p>

         
        <br/>
        <div className="bg-green-500 h-1 w-1/4 mx-auto mt-10 mb-2"></div>
        <br/>
        <br/>
    </div>
    

    );
}

export default About;