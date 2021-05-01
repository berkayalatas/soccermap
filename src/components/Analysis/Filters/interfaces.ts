import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

export interface Filters {
  country: string;
  leauges: string[];
  positions: string[];
  team: string;
  players: string[];
}

export interface FiltersProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

export type SelectChangeEvent = ChangeEventHandler<{
  name?: string | undefined;
  value: unknown;
}>;
