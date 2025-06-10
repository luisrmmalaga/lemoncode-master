import { CharacterEntityApi } from './character-collection.api-model';

const characterCollectionLocalUrl = '/api/character';
const characterCollectionUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  return fetch(characterCollectionLocalUrl)
    .then((response) => response.json())
    .then((data) => {
      return data.results as CharacterEntityApi[];
    });
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  return true;
};
