export interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export interface ConstructorStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: Constructor;
}

export interface ConstructorStandingsList {
    season: string;
    round: string;
    ConstructorStandings: ConstructorStanding[];
}

export interface StandingsTable {
    season: string;
    StandingsLists: ConstructorStandingsList[];
}

export interface MRData {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: StandingsTable;
}

export interface ConstructorStandingsRootObject {
    MRData: MRData;
}
