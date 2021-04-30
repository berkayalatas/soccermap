import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

export interface Filters {
  country: string;
  leauges: string[];
  positions: string[];
  team: string;
  players: string[];
  physicalParameters: {
    acceleration: [number, number];
    pace: [number, number];
    jumping: [number, number];
    agility: [number, number];
    strength: [number, number];
    stamina: [number, number];
    balance: [number, number];
  };
  passingParameters: {
    passing: [number, number];
    technique: [number, number];
    vision: [number, number];
    workrate: [number, number];
    freekick: [number, number];
    crossing: [number, number];
    dribbling: [number, number];
  };
  attackingParameters: {
    finishing: [number, number];
    anticipation: [number, number];
    flair: [number, number];
    firstTouch: [number, number];
    determination: [number, number];
    offTheBall: [number, number];
    longShot: [number, number];
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
