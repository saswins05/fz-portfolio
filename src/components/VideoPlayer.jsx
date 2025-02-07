import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({
  url,              // URL de la vidéo
  autoPlay = false, // Lecture automatique (par défaut, non)
  controls = true,  // Affichage des contrôles (par défaut, oui)
  width = '80%',    // Largeur du lecteur (par défaut, 80%)
  height = 'auto',  // Hauteur du lecteur (par défaut, auto)
  loop = false,     // Lire en boucle ou non
  muted = false,    // Lecture sans son (par défaut, non)
}) => {
  if (!url) {
    return <div className="text-white">Aucune vidéo disponible.</div>;
  }

  return (
      <ReactPlayer 
        url={url} 
        playing={autoPlay}
        controls={controls}
        loop={loop}
        muted={muted}
        width={width}
        height={height}
      />
  );
};

export default VideoPlayer;
