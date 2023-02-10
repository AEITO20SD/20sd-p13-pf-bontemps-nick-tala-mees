import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IReservationRepository } from "../interfaces/ireservation.repository";
import { CalanderModel } from "../models/calander.model";
import { ReservationModel } from "../models/reservation.model";

@Injectable({providedIn: "root"})
export class ReservationRepository implements IReservationRepository {
    
    constructor(private httpClient: HttpClient) { }

    public getGeneratedCalander(): any {
        return this.httpClient.get<CalanderModel>("http://localhost:3080/reservation/calander/dates/");
    }

    public updateReservation(reservationData: ReservationModel): void {
        console.log(reservationData);
        this.httpClient.post("http://localhost:3080/reservation/calander/insert/", reservationData).subscribe();
    }
}