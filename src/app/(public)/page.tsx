"use client"
import Image from "next/image";
import ContactModal from "../components/ContactModal";
import { useState } from "react";
import { Ethereum, PaymentBadges, TechBadges } from "../../../shared/assets/images";

export default function Home() {
  const [showModal, setModalVisible] = useState(false)

  return (
    <div className="items-center justify-items-center">
      <header className="w-full sticky top-0 left-0 z-50">
        <nav className="w-[90%] md:w-[80%] md:flex-row mx-auto flex flex-col items-center justify-around p-4 bg-[#00000025] backdrop-blur-sm rounded mt-2">
          <p className="text-white text-[1.5rem] font-bold">DYGO | CODE</p>
          <ul className="flex gap-[20px]">
            <li><a className="text-white text-[.87rem] md:text-[1rem] font-500 font-inter transition duration-300 hover:text-[#faa307]" href="https://wa.me/5511966082147">Nosso Contato</a></li>
            <li><a className="text-white text-[.87rem] md:text-[1rem] font-500 font-inter transition duration-300 hover:text-[#faa307]" href="https://www.linkedin.com/in/yuri2u/">Linkedin</a></li>
            <li><a className="text-white text-[.87rem] md:text-[1rem] font-500 font-inter transition duration-300 hover:text-[#faa307]" href="https://www.instagram.com/dygocode/">Instagram</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col w-full p-6 items-center justify-center">
        <ContactModal isOpen={showModal} onClose={()=> setModalVisible(!showModal)}/>
        <a href="https://wa.me/5511966082147">
          <Image className="z-1 rounded-[20px] max-w-[65px] h-auto fixed right-[12px] bottom-[45px] transform transition-transform duration-300 hover:scale-125 hover:cursor-pointer"
          src="/images/whatsapp.png" 
          alt="dygo-whatsapp" 
          width={1019} height={1019} />
        </a>
        <h1 className="text-center text-[3rem] sm:text-[3rem] md:text-[5rem] font-bold font-inter">Precisa de um <span className="text-[#faa507]">site</span> ou <span className="text-[#faa507]">sistema</span> e não sabe por onde começar?</h1>
        <h2 className="text-center text-[1.5rem] font-[500] font-inter">Simule um orçamento de suas ideias ou entre em contato com a gente</h2>
        <div className="flex justify-center w-[200px] bg-[#c06600] px-[20px] py-[10px] rounded-[8px] mt-[20px]">
          {/* <a className="font-bold" href="#" onClick={()=> setModalVisible(!showModal)}>Vamos começar?</a> */}
          <a className="font-bold" href="https://wa.me/5511966082147">Vamos começar?</a>
        </div>
        <section className="flex flex-wrap items-center justify-center w-[90%] p-2 bg-white rounded-[20px] mt-20 gap-[5px]">
          {/* {PaymentBadges.map((badge, index) => (
            <Image key={index} src={badge.image} alt={`${badge.method}-badge`} width={150} height={84} className="max-w-[150px] w-full h-auto"></Image>
          ))} */}
          {TechBadges.map((badge, index) => (
            <Image key={index} src={badge.image} alt={`${badge.method}-badge`} width={badge.width} height={badge.height} className="h-auto"></Image>
          ))}
        </section>
        <section className="flex flex-col justify-center items-center w-[90%] mt-20 gap-[20px]">
            <p className="text-white text-[1rem] md:text-[1.5rem] font-bold font-inter ">Tem alguma ideia figma?</p>
          <div className="flex flex-wrap justify-center items-center gap-[20px]">
            {/* <Image src="/images/sell-steps.png" alt="bot-steps" width={916} height={219}></Image> */}
            <div className="py-2 px-16">
              <Image className="rounded-[20px] max-w-[100%] h-auto" src="/images/workout.jpeg" alt="marketplace-step" width={1234} height={762}></Image>
            </div>
            <div className="py-2 px-16">
              <Image className="rounded-[20px] max-w-[100%] h-auto" src="/images/positivus.jpeg" alt="marketplace-step" width={1234} height={711}></Image>
            </div>
          </div>
        </section>
      </main>
      <footer className="bottom-0 w-full flex flex-wrap items-center justify-center bg-[#252525] p-6">
        <section className="flex flex-col items-center justify-center w-[90%] p-2 bg-[#00000030] backdrop-blur-md rounded-[20px] gap-[20px]">
          <p className="text-white text-[1rem] md:text-[1.5rem] font-bold font-inter">Nosso suporte:</p>
          <p className="text-white text-[.87rem] md:text-[1.2rem] font-bold font-inter">suporte@dygocode.com</p>
          <p>DYGO CODE&copy; 2025</p>
        </section>
      </footer>
    </div>
  );
}
