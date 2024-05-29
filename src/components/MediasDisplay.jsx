import React from "react";
import MediasCard from "../Templates/MediaCard";
// import heartEmpty from "../assets/img/heart-empty.svg"
// import heartFill from "../assets/img/heart-fill.svg"

const MediasDisplay = ({ mediasData, photographerId }) => {

  return (
    <>
       {mediasData.map((photo) => (
        <MediasCard
          key={photo.id}
          name={photo.name}
          image={photo.image ? require(`../assets/img/medias/${photographerId.name}/${photo.image}`) : undefined}
          title={photo.title}
          likesNumber={photo.likes}
          heart="❤️"
          link={photo.link}
          video={photo.image ? undefined : require(`../assets/img/medias/${photographerId.name}/${photo.video}`)}
        />
      ))}
    </>
  );
};

export default MediasDisplay;
