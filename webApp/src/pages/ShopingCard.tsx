import "../assets/scss/pages/_shoppingCard.scss";
import WanderLists from "../localjsons/testWanderList.json";

const ShopingCard = () => {
	const totalTravels = Object.keys(WanderLists).length;
	const totalPrices = WanderLists.reduce((acc, event) => acc + event.prix, 0);
	return (
		<>
			<span className="total-travels">
				{totalTravels < 1
					? totalTravels + " Voyage"
					: totalTravels + " Voyages"}
			</span>
			<div className="total-price">
				Total <span>{totalPrices} €</span>
			</div>
			<div className="events">
				{WanderLists.map(({id, title, prix, img}) => (
					<div className="event" key={id}>
						<button type="button" className="delete">
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5 4.5L4.5 13.5" stroke="#F04438" strokeWidth="2" strokeLinecap="round"
									  strokeLinejoin="round"/>
								<path d="M4.5 4.5L13.5 13.5" stroke="#F04438" strokeWidth="2" strokeLinecap="round"
									  strokeLinejoin="round"/>
							</svg>
						</button>
						<img src={img} alt=""/>
						<div className="title-price">
							<span className="title">{title}</span>
							<span className="price">{prix} €</span>
						</div>
					</div>
				))}
			</div>
			<div className="total-price">
				Total <span>{totalPrices} €</span>
			</div>
			<button className="checkout" type="button">Réserver</button>
		</>
	);
};

export default ShopingCard;
