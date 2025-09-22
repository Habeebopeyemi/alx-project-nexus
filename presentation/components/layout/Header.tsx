import React, { useState } from "react";
import Image from "next/image";
import LOGO from "@/public/assets/images/svgs/Logo.svg";
import FAV from "@/public/assets/images/svgs/Favorites.svg";
import CART from "@/public/assets/images/svgs/Cart.svg";
import USER from "@/public/assets/images/svgs/User.svg";

import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute z-10 top-0 left-0 md:block bg-white rounded-md shadow-md">
      <nav className="md:w-[90%] md:flex items-center mx-auto max-w-[1200px] rounded-md">
        <div className="w-full flex justify-between p-4 md:basis-[15%] md:justify-center rounded-md">
          <div>
            <Image src={LOGO} alt="LOGO" />
          </div>
          <div onClick={() => setOpen(prev => !prev)} className="md:hidden">
            <RxHamburgerMenu className="text-xl text-gray-600" />
          </div>
        </div>
        {open && (
          <div className="w-[95%] mx-auto md:basis-[80%] md:flex gap-3">
            <div className="w-full max-w-[60%] mx-auto md:basis-[30%] rounded-md my-4">
              <input
                type="text"
                className="w-full p-2 outline-0 bg-gray-100 focus:bg-white"
              />
            </div>
            <ul className="w-full max-w-[60%] mx-auto flex justify-between md:basis-[50%] p-2 text-gray-500 rounded-md my-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
            <ul className="max-w-[50%] mx-auto flex items-center justify-center gap-3 md:basis-[20%] py-2 rounded-md my-4">
              <li className="basis-[20%]">
                <Image src={FAV} alt="LOGO" width={30} />
              </li>
              <li className="basis-[20%]">
                <Image src={CART} alt="LOGO" width={30} />
              </li>
              <li className="basis-[20%]">
                <Image src={USER} alt="LOGO" width={30} />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
