import { useRef, useState } from 'react';
import { Play, Pause, Volume2, Radio } from 'lucide-react';

export function RadioPlayer({ url, name, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <audio
        ref={audioRef}
        className="hidden"
        src={url}
        type="audio/mpeg"
      >
        Tu navegador no soporta el elemento de audio.
      </audio>
      <div className="bg-gradient-to-br from-zinc-600 via-zinc-800 from-30% to-zinc-700 rounded-2xl border border-gray-200 shadow-md p-4 flex items-center gap-4 max-w-md w-full">
        {isPlaying ? <div className="bg-lime-600 text-lime-200 p-2 rounded-full">
          <Radio className="w-5 h-5" />
        </div> : <div className="bg-red-600 text-red-200 p-2 rounded-full">
          <Radio className="w-5 h-5" />
        </div>}
        <div className="flex-1">
          <p className="text-sm text-white font-semibold">{name}</p>
          <p className="text-xs text-sky-300 font-medium">{title}</p>
          <div className="mt-2 flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-zinc-200" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>
        </div>
        <button
          onClick={togglePlayback}
          className="bg-sky-100/50 text-gray-600 p-2 rounded-full hover:bg-sky-500 transition"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
