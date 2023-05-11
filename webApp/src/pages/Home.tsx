import "../assets/scss/pages/_home.scss";
import {Search} from "lucide-react";
import imgConcert from "../assets/images/concert.png";
import imgEvent from "../assets/images/hobbie.png";

const Home = () => {
	return (
		<>
			<div className="searchBar">
				<Search color="#475467" size="24"/>
				<input type="text" placeholder="Rechercher"/>
			</div>
			<div className="cards-row cards-row--categories">
				<h2>Categories</h2>
				<div className="cards-row__list">
					<div className="cards-row__list_card">
						<div className="overlay"></div>
						<img src={imgConcert} alt=""/>
						<h3>Concert</h3>
					</div>
					<div className="cards-row__list_card">
						<div className="overlay"></div>
						<img src={imgConcert} alt=""/>
						<h3>Séminaires</h3>
					</div>
					<div className="cards-row__list_card">
						<div className="overlay"></div>
						<img src={imgConcert} alt=""/>
						<h3>Conférence</h3>
					</div>
				</div>
			</div>
			<div className="cards-row">
				<h2>Évènements</h2>
				<div className="cards-row__list">
					<div className="cards-row__list_card">
						<img src={imgConcert} alt=""/>
						<h3>Concert</h3>
					</div>
					<div className="cards-row__list_card">
						<img src={imgConcert} alt=""/>
						<h3>Séminaires</h3>
					</div>
					<div className="cards-row__list_card">
						<img src={imgConcert} alt=""/>
						<h3>Conférence</h3>
					</div>
				</div>
			</div>
			<div className="cards-row">
				<h2>Évènements</h2>
				<div className="cards-row__list">
					<div className="cards-row__list_card">
						<img src={imgConcert} alt=""/>
						<h3>Concert</h3>
					</div>
					<div className="cards-row__list_card">
						<img src={imgConcert} alt=""/>
						<h3>Séminaires</h3>
					</div>
					<div className="cards-row__list_card">
						<img src={imgConcert} alt=""/>
						<h3>Conférence</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
