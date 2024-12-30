import React from 'react';

const Contact_pri = () => {
    const handleContactClick = () => {
        const message = encodeURIComponent(document.getElementById('message').value);
        const mailtoLink = `mailto:mbch.societe@gmail.com?subject=Demande de service &body=${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div id="Contact" className="w-full bg-[#c7d9d3] py-16 px-4 ">
            <br />
            <br />
            <br />
            <div className="w-full bg-[#c7d9d3] py-16 px-4 ">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-[#000000] font-bold text-center text-3xl md:text-center">Contact</h2>
                        <br />
                        <h3 className="text-[#000000] text-center text-l md:text-center">Contactez-nous dès aujourd'hui pour discuter de votre projet de construction ou de rénovation.</h3>
                      
                        <br />
                        <br /> 
                        <textarea id="message" className="w-full h-32 p-3 border border-gray-300 rounded-md" placeholder="Entrez votre message ici"/>
                        <br />
                        <br />               
                        <div className="formBlock">
                            <button type="button" onClick={handleContactClick} className="w-24 p-2 ml-[40%] bg-[#049062] text-white">Contact</button>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <iframe
                            title="Our Headquarters"
                            // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.9178134379254!2d2.3571485119334623!3d48.78345927120235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67157b7c8820f%3A0xc4df7d9b4c2ebd80!2s5%20Rue%20Antoine%20de%20Saint-Exup%C3%A9ry%2C%2094800%20Villejuif!5e0!3m2!1sfr!2sfr!4v1707491135083!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.9178134379254!2d2.3571485119334623!3d48.78345927120235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67157b7c8820f%3A0xc4df7d9b4c2ebd80!2s5%20Rue%20Antoine%20de%20Saint-Exup%C3%A9ry%2C%2094800%20Villejuif!5e0!3m2!1sfr!2sfr!4v1707491135083!5m2!1sfr!2sfr"
                            className="w-full"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_pri;
