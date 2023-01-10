import { TimePeriodModel } from "./timePeriod.model";

export interface CalanderModel {
    date: Date,
    availability: String,
    timePeriods: Array<TimePeriodModel>,
}