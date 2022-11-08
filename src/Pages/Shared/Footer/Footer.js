import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
     < div>
         <footer className="w-full footer  p-32 bg-[#110f0f67] text-base-content  ">
         <div>
          <p>
            {/* <img src={logo} alt="" /> */}
            ACME Industries Ltd.
            <br />
            sabikonnahar.sr@gmail.com
          </p>
          <div className="flex gap-6 mt-5 justify-center text-3xl">
            <span className="rounded-circle"><FaFacebook></FaFacebook></span>
            <span className="rounded-circle"><FaInstagram></FaInstagram></span>
            <span><FaTwitter></FaTwitter></span>
            <span><FaYoutube></FaYoutube></span>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
         <a href="/" className="link link-hover">Branding</a>
         <a href="/" className="link link-hover">Design</a>
         <a href="/" className="link link-hover">Marketing</a>
         <a href="/" className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
         <a href="/" className="link link-hover">About us</a>
         <a href="/" className="link link-hover">Contact</a>
         <a href="/" className="link link-hover">Jobs</a>
         <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
         <a href="/" className="link link-hover">Terms of use</a>
         <a href="/" className="link link-hover">Privacy policy</a>
         <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
    );
};

export default Footer;