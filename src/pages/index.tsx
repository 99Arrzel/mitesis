

import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";


export function Dashboard() {
  /* Login goes to: http://localhost:3000/api/auth/signin */
  const { data: sessionData } = useSession();
  const router = useRouter();
  return (
    <>
      {/* La parte superior */}
      <div className="flex bg-gray-400 text-center text-2xl items-center gap-4 px-4 py-1 text-white">
        <button className="bg-blue-300 p-2"
          onClick={() => {
            void router.push("/").then(() => window.scrollTo(0, 0));
          }
          }
        >
          Un loguito aquí
        </button>
        <div>
          Imprimir
        </div>
        <button

          onClick={() => {
            void router.push("/disenos").then(() => window.scrollTo(0, 0));
          }}

        >
          Diseños
        </button>
        {sessionData &&
          <>
            <button
              onClick={() => {
                void router.push("/mis_impresiones").then(() => window.scrollTo(0, 0));
              }}
            >
              Mis impresiones
            </button>
            <button
            >
              Mis Diseños
            </button>
          </>
        }
        {
          sessionData?.user.email == "respawnkillerz@gmail.com" &&
          <>
            <div className="ml-auto">
              Administrar
            </div>
          </>
        }
        <div className="ml-auto">
          <AuthStatus />
        </div>
      </div >
    </>
  );
}

export function Footer() {
  return (

    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Enlaces</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sobre nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Contacto</h4>
            <p className="text-gray-400 mb-2">Dirección: 123, Landaeta a la altura de la unifranz nose</p>
            <p className="text-gray-400 mb-2">Teléfono: +591 63613646</p>
            <p className="text-gray-400 mb-2">Email: info@arrzel.com</p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Síguenos </h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
function Home() {
  return (<>
    <Dashboard />
    <div className="bg-blue-200 ">
      <div className="grid grid-cols-3 pt-10 ">
        <div className="col-span-2">
          {/* Una imagen al centro y una descripción como un card */}
          <div className="flex flex-col items-center  justify-center">
            <Image
              className="w-full h-full object-contain"
              width={500}
              height={1000}
              src="/imagenes/img.png"
              alt="3D Printer"
            />
            <div className="bg-white/20 rounded-lg p-4 m-4 w-full">
              <h1 className="text-2xl font-bold">Impresiones 3D</h1>
              <p className="text-sm">Impresiones 3d al... blablabla Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 m-4 flex flex-wrap">
          {/* Tipos de impresiones disponibles */}
          <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
            <h1 className="text-2xl font-bold">Materiales disponibles:</h1>
          </div>
          <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
            <h1 className="text-2xl font-bold">PLA✔️</h1>
            Una imagen...
          </div>
          <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
            <h1 className="text-2xl font-bold">PETG✖️</h1>
            Una imagen...
          </div>
          <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
            <h1 className="text-2xl font-bold">ABS✖️</h1>
            Una imagen...
          </div>
          <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
            <h1 className="text-2xl font-bold">ASA✖️</h1>
            Una imagen...
          </div>
          <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
            <h1 className="text-2xl font-bold">TPU✖️</h1>
            Una imagen...
          </div>
        </div>

      </div>
      <div className="w-full p-4">
        <div className="bg-white/20 rounded-lg p-4 m-4 w-fit">
          <h1 className="text-2xl font-bold">TPU✖️</h1>
          Una imagen...
        </div>
      </div>
      <Footer />
    </div>
  </>);
}

const AuthStatus: React.FC = () => {
  const { data: sessionData } = useSession();
  useEffect(() => {
    console.log(sessionData);
  }, [sessionData]);
  return (
    <div className=" flex  items-center  justify-end gap-2 w-fit">
      <p className="text-center text-sm text-white">
        {sessionData && <span> {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 p-2 font-semibold text-white no-underline transition hover:bg-white/20 text-sm"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Cerrar Sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
};

export default Home;