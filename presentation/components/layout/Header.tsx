import React, { useState, useEffect } from "react";
import Image from "next/image";
import LOGO from "@/public/assets/images/svgs/Logo.svg";
import SEARCH from "@/public/assets/images/svgs/search.svg";
import FAV from "@/public/assets/images/svgs/Favorites.svg";
import CART from "@/public/assets/images/svgs/Cart.svg";
import USER from "@/public/assets/images/svgs/User.svg";
import { useScreenWidth } from "@/presentation/hooks/useScreenWidth";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const width = useScreenWidth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width >= 1024) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [width]);

  return (
    <header className="w-full absolute z-10 top-0 left-0 bg-white rounded-md shadow-md">
      <nav className="md:w-[90%] md:flex items-center mx-auto max-w-[1200px] rounded-md">
        {/* Logo + Hamburger */}
        <div className="w-full flex justify-between p-4 lg:basis-[15%] lg:justify-center rounded-md">
          <div>
            <Image src={LOGO} alt="LOGO" priority />
          </div>
          <button
            onClick={() => setOpen(prev => !prev)}
            className="lg:hidden"
            aria-label="Toggle navigation">
            <RxHamburgerMenu className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* AnimatePresence handles mounting/unmounting animations */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-[95%] mx-auto lg:basis-[85%] lg:flex gap-3">
              {/* Search */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="w-full max-w-[60%] flex gap-2 mx-auto lg:basis-[30%] bg-gray-100 border-[.75px] rounded-xl my-4">
                <div className="p-3">
                  <Image src={SEARCH} alt="search icon" priority />
                </div>
                <input
                  type="text"
                  placeholder="search"
                  className="w-full p-2 outline-0 text-sm text-black focus:bg-white focus:text-gray-500 rounded-tr-xl rounded-br-xl"
                />
              </motion.div>

              {/* Links */}
              <ul className="w-full max-w-[60%] mx-auto flex justify-between lg:basis-[40%] p-2 text-gray-500 rounded-md my-4">
                {["Home", "About", "Contact Us", "Blog"].map(item => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.1, color: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer">
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Icons */}
              <ul className="max-w-[50%] mx-auto flex items-center justify-center gap-3 lg:basis-[20%] py-2 rounded-md my-4">
                {[FAV, CART, USER].map((icon, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="basis-[20%] cursor-pointer">
                    <Image src={icon} alt="icon" width={25} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
