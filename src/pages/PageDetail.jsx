import React from "react";
// import Info from "../components/Info";
import { useParams } from "react-router-dom";
// import jsonData from "../data/data.json";
import jsonData from "../data/photographers.json";
// import SlideShow from "../components/SlideShow"


// const Template = () => {
//   // Récupérer l'ID à partir des paramètres de l'URL
//   const { id } = useParams();

//   // Trouver l'élément correspondant dans le tableau de données en fonction de l'ID
//   const item = jsonData.find((item) => item.id === id);

//   return (
//     <div className="template">
//       <SlideShow item={item} />
//       <Info item={item} />
//     </div>
//   );
// };

// export default Template;

const pageDetail = () => {
  // Récupérer l'ID à partir des paramètres de l'URL
  const { id } = useParams();

  // Trouver l'élément correspondant dans le tableau de données en fonction de l'ID
  const item = jsonData.find((item) => item.id === id);
  console.log(item)
  return (
    <div className="template">
      {/* <SlideShow item={item} />
      <Info item={item} /> */}
    </div>
  );
};

export default pageDetail;
