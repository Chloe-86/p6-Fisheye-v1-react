
export const Card = ({ 
  name, 
  city, 
  country, 
  tagline, 
  nameTag: NameTag = "h2", 
  cityTag: CityTag = "h3", 
  taglineTag: TaglineTag = "p"
}) => {
   // eslint-disable-next-line no-unused-vars
   const unusedVariables = { NameTag, CityTag, TaglineTag };
  return (
    <>
      <NameTag>{name}</NameTag>
      <CityTag>{`${city}, ${country}`}</CityTag>
      <TaglineTag>{tagline}</TaglineTag>
    </>
  );
};