"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineGroups, MdOutlineHandshake, MdOutlineLocalOffer } from "react-icons/md";
import { BiSolidBookHeart } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  const rota = usePathname();
  const [botao, setbotao] = useState(false);

  return (
    <>
    <div className="w-[300] flex justify-center items-center flex-col p-5 gap-4">
        <Image
          width={200}
          height={100}
          src="http://books.google.com/books/content?id=Wl6cQK1_vhIC&printsec=frontcover&img=1&zoom=3&edge=curl&source=gbs_api"
          alt=""
          priority
        />
        <div>
            <h1>"Diccionario de refranes comentado"</h1>
        </div>
        <div className="">
          <p>A venda</p>
        </div>
      </div>
      <div className="bg-olive-200 flex p-5 items-center">
        <div className="flex items-center ml-[-10] gap-2 md:gap-10 md:ml-10">
          <RxHamburgerMenu
            size="21px"
            className="md:hidden"
            onClick={() => setbotao(true)}
          />
          <h1 className="font-montserrat md:text-3xl text-2xl">
            <a href="/home">BookShare</a>
          </h1>
        </div>

        <ul className="flex justify-center gap-3  w-full font-sans text-lg font-medium ">
          <li className="hidden md:block ">
            <Link
              href="/emprestar"
              className={rota === "/emprestar" ? "underline" : ""}
              onClick={() => setbotao(false)}
            >
              Emprestar
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/doar" className={rota === "/doar" ? "underline" : ""}>
              Doar
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="/vender"
              className={rota === "/vender" ? "underline" : ""}
            >
              Vender
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="comprar"
              className={rota === "/comprar" ? "underline" : ""}
            >
              Comprar
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="/clube"
              className={rota === "/clube" ? "underline" : ""}
            >
              Clube
            </Link>
          </li>
        </ul>

        <div className=" flex justify-end  gap-10">
          <div className="flex items-center md:border-2 rounded-[5px] md:border-olive-400  p-1 ">
            <input
              type="text"
              placeholder="Pesquisa"
              className=" outline-none hidden md:block"
            />
            <FaSearch size="25px" className="text-olive-600 flex items-center" />
          </div>
          <FaUserCircle size="40px" className="hidden md:block"/>
        </div>
      </div>
      <div className={botao === true ? "block" : "hidden"}>
        <ul
          className="flex flex-col gap-3 fixed w-[70%] font-sans text-lg 
        font-medium bg-olive-300 bottom-0 top-0 left-0 p-3"
        >
          <div className="flex flex-col items-center gap-2 border-b-2 pb-3 border-olive-500">
            <FaUserCircle size="70px" /> <p className="">User Name</p>
          </div>
          <li className=" flex items-center p-1 gap-2">
            <MdOutlineHandshake />
            <Link
              href="/emprestar"
              className={rota === "/emprestar" ? "underline" : ""}
            >
              Emprestar
            </Link>
          </li>
          <li className="flex items-center p-1 gap-2">
            <BiSolidBookHeart />
            <Link href="/doar" className={rota === "/doar" ? "underline" : ""}>
              Doar
            </Link>
          </li>
          <li className="flex items-center p-1 gap-2">
            <MdOutlineLocalOffer />
            <Link
              href="/vender"
              className={rota === "/vender" ? "underline" : ""}
            >
              Vender
            </Link>
          </li>
          <li className="flex items-center p-1 gap-2">
            <FiShoppingCart />
            <Link
              href="comprar"
              className={rota === "/comprar" ? "underline" : ""}
            >
              Comprar
            </Link>
          </li>
          <li className="flex items-center gap-2 p-1">
            <MdOutlineGroups />
            <Link
              href="/clube"
              className={rota === "/clube" ? "underline" : ""}
            >
              Clube
            </Link>
          </li>
        </ul>

      </div>
    </>
  );
}















      <div>
        <ul
          className="flex flex-col gap-4 fixed w-[15%] font-sans text-lg
          font-medium bg-olive-200 bottom-0 top-0 left-0 
          p-2  justify-center h-full  mt-[-5]" 
        ><Image src="/logo1.png" alt="" width={140} height={50} className="mb-auto "/>
          
          
          <div className="flex-1"></div>
          <li
            className={
              rota === "/home"
                ? "bg-olive-300 flex items-center p-1 gap-2 w-[130] rounded-2xl "
                : "flex items-center gap-2 p-1"
            }
          >
            <CgHome />
            <Link href="/home">Home</Link>
          </li>

          <li
            className={
              rota === "/emprestar"
                ? "bg-olive-300 flex items-center p-1 gap-2 w-[160] rounded-2xl "
                : "flex items-center gap-2 p-1"
            }
          >
            <MdOutlineHandshake />
            <Link href="/emprestar">Emprestar</Link>
          </li>
          <li
            className={
              rota === "/doar"
                ? "bg-olive-300 flex items-center p-1 gap-2 w-[160] rounded-2xl "
                : "flex items-center gap-2 p-1"
            }
          >
            <BiSolidBookHeart />
            <Link href="/doar">Doar</Link>
          </li>
          <li
            className={
              rota === "/vender"
                ? "bg-olive-300 flex items-center p-1 gap-2 w-[160] rounded-2xl "
                : "flex items-center gap-2 p-1"
            }
          >
            <MdOutlineLocalOffer />
            <Link href="/vender">Vender</Link>
          </li>
          <li
            className={
              rota === "/comprar"
                ? "bg-olive-300 flex items-center p-1 gap-2  w-[160] rounded-2xl "
                : "flex items-center p-1 gap-2"
            }
          >
            <FiShoppingCart />
            <Link href="comprar">Comprar</Link>
          </li>
          <li
            className={
              rota === "/clube"
                ? "bg-olive-300 flex items-center p-1 gap-2 w-[160] rounded-2xl "
                : "flex items-center p-1 gap-2"
            }
          >
            <MdOutlineGroups />
            <Link href="/clube">Clube</Link>
          </li>
          <div className="flex-3"></div>
        </ul>
      </div>








<div className="bg-olive-200 flex p-5 items-center">
        <div className="flex-1"></div>
        <div
          className="flex items-center  border-2 rounded-[15px]
            border-olive-300 gap-5 p-1 w-svh"
        >
          <FaSearch size="20px" className="text-olive-600 flex items-center" />

          <input
            type="text"
            placeholder="Pesquisa"
            className=" outline-none w-full"
          />
        </div>

        <div className=" flex-1 flex gap-3 items-center justify-end ">
          <FaUserCircle size="40px" className=" " />
          <span>User Name</span>
        </div>
      </div>