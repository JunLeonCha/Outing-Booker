import axios from "axios";
import "../assets/scss/pages/_voyages.scss";
import {useEffect, useState} from 'react';
import {useAuth} from "../context/AuthContext";
import {booking} from "../interfaces/booking";
import {NavLink} from "react-router-dom";


const Voyages = () => {
	const {session} = useAuth();
	const [userBookings, setUserBookings] = useState<booking[]>([])

	useEffect(() => {
		if (session) {
			const list_bookings = async () => {
				axios.post(`${process.env.REACT_APP_OUTING_BOOKER}/booking/get_users_list_bookings/`, {
					id_user: session.userData[0].id
				}).then(response => {
					setUserBookings(response.data);
				});
			};
			list_bookings();
		}
	}, [session]);
	return (
		<>
			<div className="top">
				<div className="top__avatar"></div>
				<span className="top__username">Username</span>
			</div>
			<nav className="left">
				<NavLink to="/">Mes favoris</NavLink>
				<NavLink to="/voyages">Mes voyages</NavLink>
				<NavLink to="/compte">Mon compte</NavLink>
			</nav>
			<div className="right">
				{userBookings.map((booking: booking) => (
					<div key={booking.id} className="card">
						<img src="/images/culture.png" alt=""/>
						<h3>{booking.events.name}</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default Voyages;
