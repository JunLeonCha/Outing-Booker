import WanderLists from "../localjsons/testWanderList.json";

const ShopingCard = () => {
  const totalTravels = Object.keys(WanderLists).length;
  const totalPrices = WanderLists.reduce((acc, event) => acc + event.prix, 0);
  return (
    <>
      <p>
        {totalTravels < 1
          ? totalTravels + " Voyage"
          : totalTravels + " Voyages"}
      </p>
      <div className="total-price">
        Total <span>{totalPrices} €</span>
      </div>
      <div className="shop-card">
        <div className="feeds">
          {WanderLists.map(({ id, title, prix, img }) => (
            <div className="event" key={id}>
              <img src={img} alt="" />
              <div className="title-price">
                <p>{title}</p>
                <p>{prix} €</p>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price"></div>
      </div>
    </>
  );
};

export default ShopingCard;
