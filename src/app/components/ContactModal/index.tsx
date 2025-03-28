import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
const ContactModal = ({ isOpen, onClose }: Props) => {
    return (
        <>
            {isOpen ? (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-1"
                onClick={()=> onClose()}>
                    <form className="relative w-[90%] md:w-[40%] p-6 bg-[#252525] rounded-[20px]"
                    onClick={(e)=> e.stopPropagation()}>
                    <IoCloseCircleOutline className="absolute right-[10px] top-[10px] hover:cursor-pointer" size={30} onClick={()=> onClose()}/>
                        <p className="text-center text-[1.5rem] font-[500] font-inter">Serviço indisponivel.<br></br> Gostaria de colocar seu email para saber quando estiver disponivel?</p>
                        <div className="w-full bg-[#202020] rounded-[8px] mt-5">
                            <input className="w-full p-4 focus:outline-[2px] focus:outline-[#c06600] rounded-[8px]" type="text" placeholder="seu email" />
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                </div>
            )}
        </>
    );
}

export default ContactModal;