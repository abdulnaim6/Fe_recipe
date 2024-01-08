// import React from "react";
// import "./style.css";
// import Background from "../../assets/image 15.png";
// import Icon from "../../assets/barbecue 1 (1).png";

// const BgLeft = () => {
//   return (
//     <>
//       <div className="bg"></div>
//       <img src={Background} alt="Backgound" />
//       <div className="icom-wrapper">
//         <img src={Icon} alt="Icon" />
//       </div>
//     </>
//   );
// };

// export default BgLeft;
import React from "react";
import "./style.css";
import Background from "../../assets/image 15.png";
import Icon from "../../assets/barbecue 1 (1).png";

const BgLeft = () => {
  return (
    <>
      <div className="bg"></div>
      <img src={Background} alt="Backgound" />
      <div className="icon-wrapper">
        <img src={Icon} alt="Icon" />
      </div>
    </>
  );
};

export default BgLeft;
