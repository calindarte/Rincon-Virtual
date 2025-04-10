import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-center  bg-[url('https://img.freepik.com/vector-gratis/tema-pantalla-maquina-juegos-arcade_1308-160989.jpg?t=st=1744241062~exp=1744244662~hmac=7df1ea64c927585aec17c1288354950f32551eef282423f248e7e92396d1a333&w=900')]  p-4">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-xl border rounded-3xl bg-purple-700 px-8 py-4 my-10 text-center">
        ¡Bienvenido al Rincón Mágico del Aprendizaje!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-4">
        <Link to="/cancion">
          <div className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-6 rounded-2xl shadow-lg text-xl text-center transition-all">
          🎶 Canción
          </div>
        </Link>

        <Link to="/cuento">
          <div className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-6 rounded-2xl shadow-lg text-xl text-center transition-all">
            📖 Cuento
          </div>
        </Link>

        <Link to="/juegos">
          <div className="bg-green-400 hover:bg-green-500 text-white font-bold py-6 rounded-2xl shadow-lg text-xl text-center transition-all">
            🎮 Juegos
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
