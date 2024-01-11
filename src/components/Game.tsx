import { useRef, useState } from "react";

export const Game: React.FC<{
  verifyLetter: (letter: string) => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string;
  guessedLetters: string;
  wrongLetters: string;
  guesses: number;
  score: number;
}> = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current && letterInputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center align-middle my-10 gap-10 text-xl">
      <span>Pontuação: {score}</span>

      <h1 className="text-4xl text-orange-500">Adivinhe a Palavra:</h1>

      <h3>
        Dica sobre a palavra-  
        <span className="text-xl text-yellow-500">{pickedCategory}</span>
      
      </h3>

      <p>Você ainda tem <span className="text-yellow-500">{guesses}</span> tentativas:</p>

      <div className="border-8 p-5 uppercase border-orange-500 text-5xl">
      {letters.map((letter: string, i: number) =>
  guessedLetters.includes(letter) ? (
    <span key={i} className=  " text-black  px-3 border-black bg-slate-300 border-2 ">
      {letter}
    </span>
  ) : (
    <span key={i} className="px-2 bg-slate-300 text-slate-300 border-2 border-black">
      __
    </span>
  )
)}

      </div>

      <div>
        <p>Tente adivinhar uma letra da palavra:</p>
      </div>

      <form className="flex gap-5 text-black text-3xl" onSubmit={handleSubmit}>
        <input
          className="p-1 w-10 bg-slate-300"
          type="text"
          name="letter"
          maxLength={1}
          required
          value={letter}
          ref={letterInputRef}
          onChange={(e) => setLetter(e.target.value)}
        />
        <button className="border-2
      hover:bg-sky-900 text-cyan-200 hover:text-orange-500  bg-cyan-950 rounded-3xl py-2 px-5
      hover:border-black border-orange-600 text-xl">Jogar!</button>
      </form>

      <div>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter: string, i: number) => (
          <span className="text-yellow-500 text-2xl" key={i}> {letter}, </span>
        ))}
      </div>
    </div>
  );
};
