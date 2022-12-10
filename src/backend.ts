import * as endopoints from './utility/endpoints';
import { ConstructorStandingsList, ConstructorStandingsRootObject } from './models/constructor-standings-models';
import { DriverStandingsList, DriverStandingsRootObject } from './models/driver-standings-models';
import { Race, SeasonRootObject } from './models/season-models';
import { RaceStandingsRootObject, Result } from './models/race-models'
import { Logger } from './utility/logger';
import { SprintRaceRootObject, SprintResult } from './models/sprint-race-models';
import { QualifyingResult, QualifyingRootObject } from './models/qualifying-models';

export class Backend {
    
    logger = new Logger();
    constructor() {}

    async getSessionSchedule(): Promise<Race[]> {
        //todo: cache this value becasue it will unlikely change in the time
        this.logger.log('log', 'Getting session schedule');
        const response = await fetch(endopoints.seasonSchedule);
        const data: SeasonRootObject = await response.json();
        return data.MRData.RaceTable.Races;
    }

    async getDriverStandings(): Promise<DriverStandingsList[]> {
        this.logger.log('log', 'Getting driver standings');
        const response = await fetch(endopoints.driverStandings);
        const data: DriverStandingsRootObject = await response.json();
        return data.MRData.StandingsTable.StandingsLists;
    }

    async getConstructorStandings(): Promise<ConstructorStandingsList[]> {
        this.logger.log('log', 'Getting constructor standings');
        const response = await fetch(endopoints.constructorStandings);
        const data: ConstructorStandingsRootObject = await response.json();
        return data.MRData.StandingsTable.StandingsLists;
    }

    async getQualiResultsByYearAndRound(year: number, round: number): Promise<QualifyingResult[]> {
        this.logger.log('log', 'Getting quali results for year ' + year + ' and round ' + round);
        const url = endopoints.qualifying.replace(':year', year.toString()).replace(':round', round.toString());
        this.logger.log('log', url);
        const response = await fetch(url);
        const data: QualifyingRootObject = await response.json();
        return data.MRData.RaceTable.Races[0].QualifyingResults;
    }

    async getRaceResultsByYearAndRound(year: number, round: number): Promise<Result[]> {
        this.logger.log('log', 'Getting race results for year ' + year + ' and round ' + round);
        const url = endopoints.race.replace(':year', year.toString()).replace(':round', round.toString());
        this.logger.log('log', url);
        const response = await fetch(url);
        const data: RaceStandingsRootObject = await response.json();
        return data.MRData.RaceTable.Races[0].Results;
    }

    async getSprintRaceResultsByYearAndRound(year: number, round: number): Promise<SprintResult[]> {
        this.logger.log('log', 'Getting sprint race results for year ' + year + ' and round ' + round);
        const url = endopoints.sprintRace.replace(':year', year.toString()).replace(':round', round.toString());
        this.logger.log('log', url);
        const response = await fetch(url);
        const data: SprintRaceRootObject = await response.json();
        return data.MRData.RaceTable.Races[0].SprintResults;
    }

}
