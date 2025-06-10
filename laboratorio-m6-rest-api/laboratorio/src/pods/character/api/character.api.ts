import { Character } from './character.api-model';
import { Location } from '#common/models';

const characterUrl = 'https://rickandmortyapi.com/api/character/';
const characterLocalUrl = '/api/character/';

export const getCharacter = async (id: string): Promise<Character> => {
  return fetch(`${characterLocalUrl}${id}`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getLocation = async (url: string): Promise<Location> => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return fetch(`${characterLocalUrl}${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  }).then((response) => response.ok);
};
