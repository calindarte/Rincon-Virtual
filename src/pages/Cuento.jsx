import { Link } from "react-router-dom"

const Cuento = () => {
  return (
     <div className="min-h-screen relative bg-center bg-cover  bg-[url('https://img.freepik.com/vector-gratis/fondo-dia-mundial-libro-dibujado-mano_23-2149309214.jpg?t=st=1744247170~exp=1744250770~hmac=8b07453fefc2b44728b87615c82f9bd81bb58fa7687a360c69a5e852bf760061&w=996')] flex flex-col items-center justify-start py-10 px-4">
             <Link to="/" className="left-6 top-6 absolute  px-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-6 rounded-2xl shadow-lg text-xl text-center transition-all">
                <span>
                <i className="fas fa-arrow-left"></i>
                </span>    Atras
                    </Link>
            <h1 className="text-4xl font-extrabold text-purple-700 bg-white py-6 px-8 rounded-2xl border mb-14 drop-shadow-md text-center">
            📖 ¡Hora de Aprender con una Historia!
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

export default Cuento
