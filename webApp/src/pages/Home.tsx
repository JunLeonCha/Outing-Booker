import "../assets/scss/pages/_home.scss";
import {Search} from "lucide-react";
import imgConcert from "../assets/images/concert.png";
import {useEffect, useState} from 'react';
import axios from 'axios';
import {EventResult} from "../interfaces/ticketMaster";
import {useNavigate} from "react-router-dom";

const Home = () => {

	const navigate = useNavigate()
	const [homeEvents, setHomeEvents] = useState<EventResult[]>([])
	const [cardCount, setCardCount] = useState<number>(5)

	const handleClickDetails = (id: string) => {
		navigate(`/evenement/${id}`)
	}


	useEffect(() => {
		const getEvent = async () => {
			const event = await axios.get("/extern-api/Ticket-Master/home-event")
			setHomeEvents(event.data)
		}
		getEvent()
		const handleResize = () => {
			const count = window.innerWidth < 700 ? 3 : 5;
			setCardCount(count);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [])

	return (
		<>
			<div className="searchBar-content">
				<h1>Trouver la prochaine étape de votre vie</h1>
				<form className="searchBar">
					<Search color="#475467" size="24"/>
					<input type="text" placeholder="Rechercher" aria-label="Barre de recherche pour les évenements"/>
					<button>Rechercher</button>
				</form>
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
					{homeEvents.slice(0, cardCount).map((homeEvent: EventResult) => (
						<div key={homeEvent.id} className="cards-row__list_card">
							<img onClick={() => handleClickDetails(homeEvent.id)} src={homeEvent.images[2].url} alt=""/>
							<h3>{homeEvent.name}</h3>
						</div>
					))}
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
