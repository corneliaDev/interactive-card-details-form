// import { CardBack } from "./CardBack";
// import { CardFront } from "./CardFront";

export function CardBox({ cardInformation }) {
  return (
    <div className="card-box">
      <CardFront cardInformation={cardInformation} />
      <CardBack cvc={cardInformation.cvc} />
    </div>
  );
}
function CardFront({ cardInformation }) {
  return (
    <div className=" card card_front">
      <img src="images/card-logo.svg" alt="card logo" />
      <div className="card_front-number">
        {cardInformation.number
          ? cardInformation.number
          : "0000 0000 0000 0000"}
      </div>
      <div className="card_front-name--row">
        <div className="card_front-name">
          {cardInformation.name ? cardInformation.name : "Jane Appleseed"}
        </div>
        <div className="card_front-cvc">
          {cardInformation.month ? cardInformation.month : "00"}/
          {cardInformation.year ? cardInformation.year : "00"}
        </div>
      </div>
    </div>
  );
}

function CardBack({ cvc }) {
  return (
    <div className="card card_back">
      <div>{!cvc ? "000" : cvc}</div>
    </div>
  );
}
