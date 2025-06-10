export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: createEmptyOrigin(),
  location: createEmptyLocation(),
  image: '',
  episode: [],
  url: '',
  created: '',
  bestSentence: '',
});

export const createEmptyOrigin = (): Origin => ({
  name: '',
  url: '',
});

export const createEmptyLocation = (): Location => ({
  name: '',
  url: '',
});
