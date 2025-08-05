import type {Dispatch, SetStateAction} from 'react';

type TTipSectionProps = {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
};

const TipSection = ({ setTip } : TTipSectionProps) => {
  return (
    <section className="w-full max-w-xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Selecciona la Propina</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[5, 10, 15, 20].map(tip => (
            <button
              key={tip}
              className="bg-purple-100 text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-200 transition-colors duration-200 cursor-pointer focus:bg-green-300"
              onClick={() => setTip(tip)}
            >
              {tip}%
            </button>
          ))}
          <button className="bg-gray-100 text-gray-600 font-medium px-6 py-3 rounded-full shadow hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            Personalizada
          </button>
        </div>
      </section>
  )
}

export default TipSection