"use client"
import Image from "next/image";
import ContactModal from "../components/ContactModal";
import { useState } from "react";
import { Ethereum, PaymentBadges } from "../../../shared/assets/images";

export default function Home() {
  const [showModal, setModalVisible] = useState(false)

  return (
    <div className="items-center justify-items-center">
      <header className="w-full sticky top-0 left-0 z-50">
        <nav className="w-[90%] md:w-[80%] md:flex-row mx-auto flex flex-col items-center justify-around p-4 bg-[#00000025] backdrop-blur-sm rounded mt-2">
          <p className="text-white text-[1.5rem] font-bold">OneForge</p>
          <ul className="flex gap-[20px]">
            <li><a className="text-white text-[.87rem] md:text-[1rem] font-500 font-inter transition duration-300 hover:text-[#faa307]" href="#" onClick={()=> setModalVisible(!showModal)}>Marketplace</a></li>
            <li><a className="text-white text-[.87rem] md:text-[1rem] font-500 font-inter transition duration-300 hover:text-[#faa307]" href="#" onClick={()=> setModalVisible(!showModal)}>Registrar</a></li>
            <li><a className="text-white text-[.87rem] md:text-[1rem] font-500 font-inter transition duration-300 hover:text-[#faa307]" href="#" onClick={()=> setModalVisible(!showModal)}>Login</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col w-full p-6 items-center justify-center">
        <ContactModal isOpen={showModal} onClose={()=> setModalVisible(!showModal)}/>
        <h1 className="text-center text-[3rem] sm:text-[3rem] md:text-[5rem] font-bold font-inter">Plataforma completa para venda de infoproduto</h1>
        <h2 className="text-center text-[1.5rem] font-[500] font-inter">saque no pix e outros metodos de pagamento e sem taxas abusivas.</h2>
        <div className="flex justify-center w-[200px] bg-[#c06600] px-[20px] py-[10px] rounded-[8px] mt-[20px]">
          <a className="font-bold" href="#" onClick={()=> setModalVisible(!showModal)}>Vamos começar?</a>
        </div>
        <section className="flex flex-wrap items-center justify-center w-[90%] p-2 bg-white rounded-[20px] mt-20 gap-[20px]">
          {PaymentBadges.map((badge, index) => (
            <Image key={index} src={badge.image} alt={`${badge.method}-badge`} width={150} height={84} className="max-w-[150px] w-full h-auto"></Image>
          ))}
        </section>
        <section className="flex flex-col justify-center items-center w-[90%] mt-20 gap-[20px]">
            <p className="text-white text-[1rem] md:text-[1.5rem] font-bold font-inter ">Quer começar a vender?</p>
          <div className="flex flex-wrap justify-center items-center gap-[20px]">
            {/* <Image src="/images/sell-steps.png" alt="bot-steps" width={916} height={219}></Image> */}
            <div className="p-4 bg-[#00000030] backdrop-blur-md rounded-[20px]">
              <Image className="rounded-[20px] max-w-[500px] w-full h-auto" src="/images/marketplace.webp" alt="marketplace-step" width={500} height={236}></Image>
            </div>
            <div className="p-4 bg-[#00000030] backdrop-blur-md rounded-[20px]">
              <Image className="rounded-[20px] max-w-[500px] w-full h-auto" src="/images/customize.webp" alt="customize-step" width={500} height={236}></Image>
            </div>
            <div className="p-4 bg-[#00000030] backdrop-blur-md rounded-[20px]">
              <Image className="rounded-[20px] max-w-[500px] w-full h-auto" src="/images/analize.webp" alt="analize-step" width={500} height={236}></Image>
            </div>
          </div>
        </section>
      </main>
      <footer className="bottom-0 w-full flex flex-wrap items-center justify-center bg-[#252525] p-6">
        <section className="flex flex-col items-center justify-center w-[90%] p-2 bg-[#00000030] backdrop-blur-md rounded-[20px] gap-[20px]">
          <p className="text-white text-[1rem] md:text-[1.5rem] font-bold font-inter">Nosso suporte:</p>
          <p className="text-white text-[.87rem] md:text-[1.2rem] font-bold font-inter">suporte@oneforge.com</p>
          <p>OneForge&copy; 2025</p>
        </section>
      </footer>
    </div>
  );
}
