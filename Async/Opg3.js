const fetch = require('node-fetch');

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  await fetch(`https://swapi.co/api/people/${id}/`).then(async res => await res.json())
    .then(async res => {
      console.log(`Name: ${res.name}`);
      await fetch(findFirst(res.films))
        .then(async res => await res.json())
        .then(async res => {
          console.log(`Film: ${res.title}`);
          await fetch(findFirst(res.species))
            .then(async res => await res.json())
            .then(async res => {
              console.log(`Species: ${res.name}`);
              await fetch(res.homeworld)
                .then(async res => await res.json())
                .then(async res => {
                  console.log(`Homeworld: ${res.name}`);
                });
            });
        });
    });
}
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);