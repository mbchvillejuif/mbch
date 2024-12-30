import React from 'react';
import { FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-black px-4 py-8'>
      <div> 
            <p className='py-4 text-white'>© 2024 MBCH. All rights reserved.</p>
            <div className='flex justify-between md:w-[75%] my-6 text-white'>
                <a href="https://www.facebook.com/people/MBCH/61556151305939/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare size={30} />
                </a>
                <a href="https://www.instagram.com/mbch.societe/?next=%2F&hl=fr" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} />
                </a>
            </div>
      </div>
        <div >
            <h1 className='text-2xl font-bold text-white'>Contact</h1>
            <p className='py-4'><a href="mailto:mbch.societe@gmail.com" className='text-white'> mbch.societe@gmail.com</a></p>
            <p><a className='text-white' href="tel:+33603177570">+33 6 03 17 75 70</a></p>
        </div>
    </div>
    );
}

export default Footer;