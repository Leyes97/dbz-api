import axios from 'axios';

export const Controllers = {
  //Obtener todos los personajes:
  allCharacter: async () => {
    try {
      const response = await axios.get(
        'https://dragonball-api.com/api/characters?limit=58',
      );
      const characters = response.data;
      return characters;
    } catch (error) {
      console.log(error);
    }
  },

  //Obtener solo un personaje por id:
  character: async (id) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/characters/${id}`,
      );
      const character = response.data;
      return character;
    } catch (error) {
      console.log(error);
    }
  },

  //Obtener un personaje por nombre:

  characterName: async (name) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/characters?name=${name}`,
      );
      const character = response.data;
      return character;
    } catch (error) {
      console.log(error);
    }
  },

  //Obtener todos los Planetas:

  allPlanets: async () => {
    try {
      const response = await axios.get(
        'https://dragonball-api.com/api/planets',
      );
      const planets = response.data;
      return planets;
    } catch (error) {
      console.log(error);
    }
  },

  //Obtener solo planeta por id:
  planet: async (id) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/planets/${id}`,
      );
      const planet = response.data;
      return planet;
    } catch (error) {
      console.log(error);
    }
  },

  //filtra los planetas por nombre:

  planetName: async (name) => {
    try {
      const response = await axios.get(
        `https://dragonball-api.com/api/planets?name=${name}`,
      );
      const planet = response.data;
      return planet;
    } catch (error) {
      console.log(error);
    }
  },
};
