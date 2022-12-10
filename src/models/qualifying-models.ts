import { Circuit } from "./season-models";
import { Driver } from "./driver-standings-models";
import { Constructor } from "./constructor-standings-models";

export interface QualifyingResults {
    number: string;
    position: string;
    Driver: Driver;
    Constructor: Constructor;
    Q1: string;
    Q2: string;
    Q3: string;
}

export interface Qualifying {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    QualifyingResults: QualifyingResults;
}

export interface RaceTable {
    season: string;
    Races: Qualifying[];
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: RaceTable;
}

export interface QualifyingStandingsRootObject {
    MRData: MRData;
}