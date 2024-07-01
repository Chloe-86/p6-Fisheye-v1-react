import React from "react";

export const Card = ({ 
  name, 
  city, 
  country, 
  tagline, 
  nameTag: NameTag = "h2", 
  cityTag: CityTag = "h3", 
  taglineTag: TaglineTag = "p"
}) => {
  return (
    <>
      <NameTag>{name}</NameTag>
      <CityTag>{`${city}, ${country}`}</CityTag>
      <TaglineTag>{tagline}</TaglineTag>
    </>
  );
};
