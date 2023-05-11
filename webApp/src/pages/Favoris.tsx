import "../assets/scss/pages/_favoris.scss";

const Favoris = () => {
	return (
		<>
			<div className="tabs">
				<button type="button" className="tabs__button tabs__button--active">Évènements</button>
				<button type="button" className="tabs__button">Organisateurs</button>
			</div>
			<div className="feeds">
				<div className="events">
					<h2></h2>
					<div className="event">
						<img src="" alt=""/>
						<p></p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Favoris;
