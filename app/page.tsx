import Image from "next/image";
import "./Imagens/ImageFundo.jpg"
import Logo  from "./Imagens/Logo.png";
import Mulher from "./Imagens/ImgMulher.png"

export default function Home() {
  return (

    <section className="brightness-50 w-100% h-screen bg-cover bg-[url('./Imagens/ImageFundo.jpg')]">
        <div className="flex items-center w-100% h-1/6">
          <div className="w-1/3">
            <Image className="bg-cover h-24 w-28 flex ml-24"
              src={Logo} alt="Logo Belifter"
            />
          </div>
          <div className="flex justify-items-center w-2/3 gap-5 ml-14">
            <a href="#">Academias Parceiras</a> 
            <a href="#">Gestor de Academia</a>
            <a href="#">App Fitness</a>
            <a href="#">Preços</a>
          </div>
        </div>

        <div className="flex flex-row w-100% h-5/6">
          <div className="w-4/5 h-5/6 flex flex-col">
            <div className="flex flex-col items-center justify-center h-3/5 w-10/12 text-center">
                <h1 className="text-6xl">Believe in the futute,</h1>
                <h1 className="flex text-6xl mt-4 flex-row">Believe in<p className="text-green-400 ml-3">Be</p>Lifter</h1>
                <p className="text-sm mt-2">Sistema Completo para gestão de academias!</p>
            </div>
            <div className="w-4/5 h-1/5 flex items-center justify-center gap-8">
                <button className=" bg-green-400 rounded-2xl h-8 w-56">Sistemas para Academias</button>
                <button className="rounded-2xl border-current border-2 h-8 w-52">App treinos e dietas</button>
            </div>
          </div>
            <div className="w-2/6 h-full">
                <Image className="flex items-center justify-center w-100% h-full"
                  src={Mulher} alt="Mulher Fitness página inicial"
                />
            </div>
        </div>
    </section>


      

  )  
}
