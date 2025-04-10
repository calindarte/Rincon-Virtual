import { Link } from "react-router-dom"

const Video = () => {
    return (
      <div className="min-h-screen relative bg-center bg-cover  bg-[url('https://img.freepik.com/foto-gratis/manos-colores-sobre-fondo-blanco-marco-vacio_23-2148642281.jpg?t=st=1744242689~exp=1744246289~hmac=0db5b5370f638e29030c47b7892cba164ea4f950793e9d767adbfc9860d8523a&w=996')] flex flex-col items-center justify-start py-10 px-4">
         <Link to="/" className="left-6 top-6 absolute  px-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-6 rounded-2xl shadow-lg text-xl text-center transition-all">
            <span>
            <i className="fas fa-arrow-left"></i>
            </span>    Atras
                </Link>
        <h1 className="text-4xl font-extrabold text-purple-700 bg-white py-6 px-8 rounded-2xl border mb-14 drop-shadow-md text-center">
        🎵 ¡Hora de Aprender con Canciones!
        </h1>
  
        <div className="bg-white rounded-3xl shadow-xl p-6 max-w-3xl w-full">
          <div className=" w-full h-100 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/DLX62G4lc44"
              title="Video Educativo para Niños"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
  
          <p className="mt-6 text-lg text-center text-gray-700">
            Este es un video de ejemplo para que los niños aprendan divirtiéndose. ¡Puedes agregar más videos como este!
          </p>
        </div>
      </div>
    )
  }
  
  export default Video
  