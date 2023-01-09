import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IReservationRepository } from "../interfaces/ireservation.repository";
import { CalanderModel } from "../models/calander.model";

@Injectable({providedIn: "root"})
export class ReservationRepository implements IReservationRepository {
    
    constructor(private httpClient: HttpClient) { }

    public getGeneratedCalander(): any {
        return this.httpClient.get<CalanderModel>("http://localhost:3080/reservation/calander/dates/");
    }
}