import { TimePeriodModel } from "./timePeriod.model";

export interface CalanderModel {
    date: Date,
    timePeriods: Array<TimePeriodModel>,
}