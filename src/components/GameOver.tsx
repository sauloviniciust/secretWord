


const GameOver = ({ retry, score }) => {
  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-3xl text-orange-500">Fim de jogo!</h1>
      <h2 className="text-2xl"> 
        A sua pontuação foi:  <span className="text-yellow-500">{score}</span>!
      </h2>
      <button className="border-2
      hover:bg-sky-900 text-cyan-200 hover:text-orange-500  bg-cyan-950 rounded-3xl py-2 px-5
      hover:border-black border-orange-600 text-xl" onClick={retry}>Reiniciar</button>
    </div>
  );
};




export default GameOver;
