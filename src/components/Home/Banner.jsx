import { useEffect, useState } from "react";
import { LinkIcon } from "../../icons/LinkIcon";
import { runCode } from '../hooks/useRunCode.js';
import { ExternalLink, Link2Icon, VideoIcon } from "lucide-react";

export function Banner() {
  const [isLive, setIsLive] = useState(false);
  const [streamData, setStreamData] = useState({
    url: '',
    title: '',
    description: ''
  });

  // Cargar configuración inicial desde la base de datos
  useEffect(() => {
    const fetchLiveStreamConfig = async () => {
      try {
        const result = await runCode('-st live_stream_config;');
        const config = result[0];
        setIsLive(config.is_live == "1");
        // console.log(result)
        setStreamData({
          url: config.stream_url,
          title: config.title,
          description: config.description
        });
      } catch (error) {
        console.error('Error fetching live stream config:', error);
      }
    };

    fetchLiveStreamConfig();
  }, []);

  if (!isLive) {
    return null; // No mostrar nada si no hay transmisión en vivo
  }

  return (
   <div className="flex w-full flex-col items-center justify-center h-28 ">
      
      <a href={streamData.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-red-700 via-red-900 from-30% to-red-700 rounded-2xl border border-red-700 shadow-md py-8 px-4 flex items-center gap-4 max-w-md w-full">
        <div className="bg-zinc-800 text-zinc-200 p-2 rounded-full">
          <VideoIcon className="w-5 h-5" />
        </div> 
        <div className="flex-1">
          <p className="text-sm text-white font-semibold">{streamData.title}</p>
          <p className="text-xs text-zinc-300 font-medium">{streamData.description}</p>
          
        </div>
        <span className="bg-transparent text-white p-2 rounded-xl hover:bg-red-500 transition">
          <ExternalLink className="w-5 h-5" /> 
        </span>
      </a>

    </div>
  )
}