import * as endopoints from './utility/endpoints';
import { ConstructorStandingsList, ConstructorStandingsRootObject } from './models/constructor-standings-models';
import { DriverStandingsList, DriverStandingsRootObject } from './models/driver-standings-models';
import { Race, SeasonRootObject } from './models/season-models';
import { Logger } from './utility/logger';

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

}
