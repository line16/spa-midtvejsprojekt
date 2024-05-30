"use client"
import Link from "next/link";
import Image from "next/image";
import style from "../app/page.module.scss";
import Logo from "../../public/images/logo-final.png";
import Modal from "../app/Modal/page"
import React from "react";

const NavFront = () => {


  return (
    <>
      <div className="Logo">
        <Image src={Logo} alt="Logo" 
        width={170} 
        height={60} />
      </div>

      <div className="NavDivs">
        <div className={style.link}>
          <Link href="/"> ABOUT</Link>
        </div>
        <div className={style.link}>
          <Link href="/Tours"> TOURS</Link>
        </div>
        <div className={style.link}>
          <Link href="/Contact"> CONTACT</Link>
        </div>
      </div>
      <div>
        <Modal/>
      </div>
    </>
  );
};

export default NavFront;
