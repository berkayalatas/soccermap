import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

export interface Filters {
  country: string;
  leauges: string[];
  positions: string[];
  team: string;
  players: string[];
  attackingParameters: {
    goal: [number, number];
    assist: [number, number];
    dribbleAttempts: [number, number];
    dribbleSuccess: [number, number];
    dribblePast: [number, number];
    shotTotal: [number, number];
    shotOnTarget: [number, number];
  };
  passingParameters: {
    crossTotal: [number, number];
    crossSuccess: [number, number];
    passAccuracy: [number, number];
    keyPass: [number, number];
    passesTotal: [number, number];
    yellowCard: [number, number];
    foulsDrawn: [number, number];
  };
  defensiveParameters: {
    blocks: [number, number];
    interceptions: [number, number];
    duelsTotal: [number, number];
    duelsWon: [number, number];
    tackles: [number, number];
    saves: [number, number];
    foulsCommited: [number, number];
  };
}

export interface FiltersProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export type SelectChangeEvent = ChangeEventHandler<{
  name?: string | undefined;
  value: unknown;
}>;
