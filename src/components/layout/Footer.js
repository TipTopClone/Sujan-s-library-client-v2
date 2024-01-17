import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-primary text-light p-5 text-center mt-5'>
      <p>&copy; 2024 All rights reserved | Made by Sujan</p>
      <div className='mt-3'>
        <a
          href='www.linkedin.com/in/sujan-mahat'
          target='_blank'
          rel='noopener noreferrer'
          className='text-light me-3'
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href='https://github.com/TipTopClone'
          target='_blank'
          rel='noopener noreferrer'
          className='text-light'
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
