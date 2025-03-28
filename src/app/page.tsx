"use client"
import Image from "next/image";
import ContactModal from "./components/ContactModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setModalVisible] = useState(false)

  return (
    <div className="items-center justify-items-center">
      <header className="w-full sticky top-0 left-0 z-50">
        <nav className="w-[90%] md:w-[80%] mx-auto flex items-center justify-around p-4 bg-[#00000025] backdrop-blur-sm rounded mt-2">
          <p className="text-white text-[1.5rem] font-bold">Dialog Forge</p>
          <ul className="flex gap-[20px]">
            <li><a href="#" onClick={()=> setModalVisible(!showModal)}>Docs</a></li>
            <li><a href="#" onClick={()=> setModalVisible(!showModal)}>Login</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col w-full p-6 items-center justify-center">
        <ContactModal isOpen={showModal} onClose={()=> setModalVisible(!showModal)}/>
        <h1 className="text-center text-[3rem] sm:text-[3rem] md:text-[5rem] font-bold font-inter">Automatize seus atendimentos com chatbots.</h1>
        <h2 className="text-center text-[1.5rem] font-[500] font-inter">saque no pix e outros metodos de pagamento e sem taxas abusivas.</h2>
        <div className="flex justify-center w-[200px] bg-[#c06600] px-[20px] py-[10px] rounded-[8px] mt-[20px]">
          <a className="font-bold" href="#" onClick={()=> setModalVisible(!showModal)}>Vamos começar?</a>
        </div>
        <section className="flex justify-center w-full p-4 bg-[#00000030] backdrop-blur-md rounded-[20px] mt-20">
          <div className="flex flex-col items-center gap-[20px]">
            <p className="text-white text-[1rem] md:text-[1.5rem] font-bold font-inter">Siga estes passos para iniciar seu bot e começar seus atendimentos:</p>
            <Image src="/bot-steps.png" alt="bot-steps" width={916} height={219}></Image>
          </div>
        </section>
      </main>
      <footer className="bottom-0 w-full flex flex-wrap items-center justify-center">
        <p>Dialog Forge&copy; 2025</p>
      </footer>
    </div>
  );
}
