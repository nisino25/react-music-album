function MoodTabs({ moods, selectedMood, onChangeMood }) {
  return (
    <div className="flex gap-3 justify-center pt-6 mb-6">
      {moods.map((mood) => (
        <button
          key={mood.name}
          onClick={() => onChangeMood(mood)}
          className={`text-2xl px-3 py-2 rounded-full transition 
            ${mood.name === selectedMood.name 
              ? 'bg-gray-200 shadow-md' 
              : 'hover:bg-gray-100'
            }`}
        >
          {mood.emoji}
        </button>
      ))}
    </div>
  );
}

export default MoodTabs;
