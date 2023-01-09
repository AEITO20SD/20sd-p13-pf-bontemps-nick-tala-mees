import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { IReservationService } from '../interfaces/ireservation.service';
import { ReservationRepository } from '../repositories/reservation.repository';

@Injectable({
    providedIn: 'root'
})
export class ReservationService extends BaseService implements IReservationService {

    constructor(private reservationRepository: ReservationRepository) {
        super();
    }

    getGeneratedCalander(): any {
        return this.reservationRepository.getGeneratedCalander();
    }
}