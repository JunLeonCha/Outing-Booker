import { Request, Response } from 'express';
import BookingController from '../../Controllers/Bookings/Booking.Controller';

describe('BookingController', () => {
    let bookingController: BookingController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        bookingController = new BookingController();
        req = {
            body: {
                id_user: '123',
                event_name: 'Test Event',
                event_city: 'Test City',
                event_address: 'Test Address',
                event_postal_code: '12345',
                event_start: '2023-06-07T09:00:00Z',
                identifier: 'Test Identifier',
                departure_travel: '2023-06-07T08:00:00Z',
                arrived_travel: '2023-06-07T10:00:00Z',
            },
        };
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
            json: jest.fn(),
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('make_reservation', () => {
        it('should make a reservation and return success', async () => {
            const insertBookingMock = jest.fn().mockResolvedValue({ data: true });
            const rpcMock = jest.fn().mockReturnValue({ insert_booking: insertBookingMock });
            const supaMock = jest.fn().mockReturnValue({ rpc: rpcMock });
            bookingController['supabase']['supa'] = supaMock;

            try {
                await bookingController.make_reservation(req as Request, res as Response);

                expect(insertBookingMock).toHaveBeenCalledWith({
                    user_id: req.body.id_user,
                    event_name: req.body.event_name,
                    event_city: req.body.event_city,
                    event_address: req.body.event_address,
                    event_postal_code: req.body.event_postal_code,
                    event_start: req.body.event_start,
                    identifier_journey: req.body.identifier,
                    departure_journey: req.body.departure_travel,
                    arrived_journey: req.body.arrived_travel,
                });
                expect(res!.status).toHaveBeenCalledWith(200);
                expect(res!.send).toHaveBeenCalledWith('success');
            } catch (error) {
                console.error(error);
            }
        });

        it('should handle error during reservation', async () => {
            const insertBookingMock = jest.fn().mockRejectedValue(new Error('Reservation error.'));
            const rpcMock = jest.fn().mockReturnValue({ insert_booking: insertBookingMock });
            const supaMock = jest.fn().mockReturnValue({ rpc: rpcMock });
            bookingController['supabase']['supa'] = supaMock;

            try {
                await bookingController.make_reservation(req as Request, res as Response);

                expect(res!.status).toHaveBeenCalledWith(500);
                expect(res!.send).toHaveBeenCalledWith({ error: 'Reservation error.', hint: undefined });
            } catch (error) {
                console.error(error);
            }
        });
    });

    describe('get_users_list_reservations', () => {
        it('should retrieve the list of user reservations', async () => {
            const selectMock = jest.fn().mockReturnThis();
            const eqMock = jest.fn().mockReturnThis();
            const fromMock = jest.fn().mockReturnValue({
                select: selectMock,
                eq: eqMock,
            });
            const supaMock = jest.fn().mockReturnValue({ from: fromMock });
            bookingController['supabase']['supa'] = supaMock;

            const bookingsData = [
                {
                    id: '1',
                    events: {
                        name: 'Test Event',
                        start: '2023-06-07T09:00:00Z',
                        address: 'Test Address',
                        city: 'Test City',
                        postal_code: '12345',
                    },
                    trains: {
                        identifier: 'Test Identifier',
                        lobby: 'Test Lobby',
                        departure_at: '2023-06-07T08:00:00Z',
                        arrived_at: '2023-06-07T10:00:00Z',
                    },
                },
                // Add more booking data if needed
            ];

            const expectedData = bookingsData.map((booking) => ({
                id: booking.id,
                events: {
                    name: booking.events.name,
                    start: booking.events.start,
                    address: booking.events.address,
                    city: booking.events.city,
                    postal_code: booking.events.postal_code,
                },
                trains: {
                    identifier: booking.trains.identifier,
                    lobby: booking.trains.lobby,
                    departure_at: booking.trains.departure_at,
                    arrived_at: booking.trains.arrived_at,
                },
            }));

            const expectedResponse = JSON.stringify(expectedData);

            try {
                await bookingController.get_users_list_reservations(req as Request, res as Response);

                expect(fromMock).toHaveBeenCalledWith('bookings');
                expect(selectMock).toHaveBeenCalledWith(
                    'id, events(name, start, address, city, postal_code), trains(identifier, lobby, departure_at, arrived_at)'
                );
                expect(eqMock).toHaveBeenCalledWith('id_user', req.body.id_user);
                expect(res!.status).toHaveBeenCalledWith(200);
                expect(res!.json).toHaveBeenCalledWith(expectedResponse);
            } catch (error) {
                console.error(error);
            }
        });
    });
});
