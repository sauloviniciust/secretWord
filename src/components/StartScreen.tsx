// Import React and other necessary modules...

type StartGameFunction = () => void;

export const StartScreen: React.FC<{ startGame: StartGameFunction }> = ({ startGame }) => {
  return (
    <div className="flex flex-col items-center mt-10 gap-5">
      <h1 className="text-3xl text-orange-500">Secret Word</h1>
      <p className="text-cyan-200">Clique no botão abaixo para começar a jogar</p>
      <button className="border-2
      hover:bg-sky-900 text-cyan-200 hover:text-orange-500  bg-cyan-950 rounded-3xl py-2 px-5
      hover:border-black border-orange-600 text-xl" onClick={startGame}>Começar</button>
    </div>
  );
};
