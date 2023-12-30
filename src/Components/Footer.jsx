import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0">
      <div className="flex mx-auto align-middle justify-between max-w-7xl p-5 bg-red-400 text-white">
        <p className="text-lg mx-auto">
          <b>Liera's Kitchen </b>&copy; @2023 Greater food standards
        </p>

        <div className="grid grid-flow-col text-2xl mx-auto space-x-3">
          <BiLogoLinkedin />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
