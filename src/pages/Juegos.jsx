import { Link } from "react-router-dom";

const Juegos = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-[url('https://img.freepik.com/foto-gratis/bodegon-pequenos-objetos-decorativos-colores-vivos_23-2149732875.jpg?t=st=1744246454~exp=1744250054~hmac=2dd5a320bbda26c71e95d295487049b5bcd620c2e7318e28e69575ff9e439a73&w=900')] flex flex-col items-center py-10 px-4">
      {/* Botón de regreso */}
      <Link to="/" className="left-6 top-6 absolute  px-6 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-6 rounded-2xl shadow-lg text-xl text-center transition-all">
            <span>
            <i className="fas fa-arrow-left"></i>
            </span>    Atras
                </Link>

      <h1 className="text-4xl font-extrabold text-purple-700 bg-white py-6 px-8 rounded-2xl border mb-14 drop-shadow-md text-center">
        🎮 ¡Hora de Aprender con un Juego!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Juego 1 */}
        <div className="bg-white rounded-3xl shadow-xl p-4">
          <h2 className="text-xl font-semibold text-center text-blue-700 mb-2">
            Flecha Derecha/Izquierda
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            style={{ maxWidth: '100%' }}
            src="https://wordwall.net/es/embed/08bfce053763494d9ff61f28c019a9bd?themeId=22&templateId=71&fontStackId=0"
            width="500"
            height="380"
            frameBorder="0"
            allowFullScreen
            title="Juego Wordwall"
            className="rounded-lg mx-auto"
          ></iframe>
          </div>
        </div>

        {/* Juego 2 */}
        <div className="bg-white rounded-3xl shadow-xl p-4 ">
          <h2 className="text-xl font-semibold text-center text-green-700 mb-2">
            Arriba y Abajo
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden ">
          <iframe
            style={{ maxWidth: '100%' }}
            src="https://wordwall.net/es/embed/b7c129fa759f46529779d249ab3a0973?themeId=1&templateId=5&fontStackId=0"
            width="500"
            height="380"
            frameBorder="0"
            allowFullScreen
            title="Juego Wordwall 2"
            className="rounded-lg mx-auto"
          ></iframe>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-white text-lg">
        ¡Estos son juegos para que los niños aprendan y se diviertan!
      </p>
    </div>
  );
};

export default Juegos;
