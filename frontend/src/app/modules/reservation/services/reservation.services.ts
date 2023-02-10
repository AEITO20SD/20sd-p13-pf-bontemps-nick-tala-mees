import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IReservationService } from '../interfaces/ireservation.service';
import { ReservationRepository } from '../repositories/reservation.repository';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
    providedIn: 'root'
})
export class ReservationService extends BaseService implements IReservationService {

    constructor(private reservationRepository: ReservationRepository) {
        super();
    }

    public getGeneratedCalander(): any {
        return this.reservationRepository.getGeneratedCalander();
    }

    public updateReservation(guestAmount: number, uniqueString: string, reservationDate: Date): any {
        const reservationData: ReservationModel = {
            guestAmount: guestAmount,
            uniqueString: uniqueString,
            reservationDate: reservationDate,
        };
        this.reservationRepository.updateReservation(reservationData);
    }

}