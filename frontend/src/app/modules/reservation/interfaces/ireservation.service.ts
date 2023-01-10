export interface IReservationService {
    getGeneratedCalander(): any;
    updateReservation(guestAmount: number, uniqueString: string, reservationDate: Date): any;
}