// @ts-ignore
export default function ButtonGroup({ handleSetId }) {
    const handlePrevious = () => handleSetId.handlePrevious();
    const handleNext = () => handleSetId.handleNext();
    
    return (
      <div className="p-6 flex justify-center gap-2">
        <button name="previous" onClick={handlePrevious}  className="w-10 h-10 flex items-center justify-center rounded-full border border-white shadow-lg bg-black/50 text-white text-xl hover:scale-110 transition-transform duration-200">
          ←
        </button>
        <button name="next" onClick={handleNext} className="w-10 h-10 flex items-center justify-center rounded-full border border-white shadow-lg bg-black/50 text-white text-xl hover:scale-110 transition-transform duration-200">
          →
        </button>
      </div>
    )
  }