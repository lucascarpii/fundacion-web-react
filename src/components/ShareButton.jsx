import { Share2Icon } from 'lucide-react';
import React, { useState } from 'react';

const convertImageToJPEG = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Necesario si la imagen es de otro dominio
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          if (!blob) return reject(new Error('No se pudo convertir la imagen'));
          const file = new File([blob], 'imagen.jpg', { type: 'image/jpeg' });
          resolve(file);
        },
        'image/jpeg',
        0.95
      );
    };

    img.onerror = () => {
      reject(new Error('No se pudo cargar la imagen para convertirla'));
    };
  });
};

const ShareButton = ({ imageUrl, title, text }) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (!navigator.share) {
      alert('La función de compartir no está disponible en este navegador.');
      return;
    }

    setIsSharing(true);

    try {
      const shareData = {
        title,
        text,
        url: window.location.href, // Añade la URL del artículo actual
      };

      try {
        const file = await convertImageToJPEG(imageUrl);
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          shareData.files = [file];
        }
      } catch (err) {
        console.warn('No se pudo adjuntar la imagen:', err.message);
      }

      await navigator.share(shareData);
      console.log('Contenido compartido con éxito');
    } catch (error) {
      console.error('Error al compartir:', error);
      alert('Ocurrió un error al intentar compartir.');
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex justify-start items-center text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm py-1 px-4 ${
        isSharing ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isSharing}
    >
      <Share2Icon className="w-4 h-4 mr-2" />
      {isSharing ? 'Compartiendo...' : 'Compartir'}
    </button>
  );
};

export { ShareButton };
