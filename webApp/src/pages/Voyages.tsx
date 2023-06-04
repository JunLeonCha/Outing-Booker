import axios from "axios";
import "../assets/scss/pages/_favoris.scss";
import { useEffect, useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { booking } from "../interfaces/booking";


const Voyages = () => {
	const { session } = useAuth();
	const [userBookings, setUserBookings] = useState<booking[]>([])

	useEffect(() => {
		if (session) {
			const list_bookings = async () => {
				axios.post(process.env.REACT_APP_OUTING_BOOKER + `/booking/get_users_list_bookings/`, {
					id_user: session.userData[0].id
				}).then(response => {
					setUserBookings(response.data);
				});
			};
			list_bookings();
		}
	}, [session]);

	console.log(userBookings)
	return (
		<>
			<div className="cards-row">
				<h2>Évènements</h2>
				<div className="cards-row__list">
					{userBookings.map((booking: booking) => (
						<div key={booking.id} className="cards-row__list_card">
							<img src="/images/culture.png" alt="" />
							<h3>{booking.events.name}</h3>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Voyages;
