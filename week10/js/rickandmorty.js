const rickAndMorty = {
  characters: [],
  locations: [],
  episodes: [],
  url: {
    charactersURL: 'https://rickandmortyapi.com/api/character',
    locationsURL: 'https://rickandmortyapi.com/api/location',
    episodesURL: 'https://rickandmortyapi.com/api/episode',
  },
  elements: {
    episodeCards: document.querySelector('.episode-cards'),
  },
  fetchInit() {
    this.findAll(rickAndMorty.url.charactersURL, this.characters);
    this.findAll(rickAndMorty.url.locationsURL, this.locations);
    this.findAll(rickAndMorty.url.episodesURL, this.episodes);
  },
  findAll(url, dtbase) {
    fetch(url).then(
      response => response.json(),
    ).then(
      (data) => {
        for (let i = 0; i < data.results.length; i += 1) {
          dtbase.push(data.results[i]);
        }
        console.log(dtbase);
        this.branching(dtbase);
      },
    );
  },
  branching(dtbase) {
    if (dtbase === this.characters) {
      this.showCharacters(this.characters);
    } else if (dtbase === this.locations) {
      this.showLocations(this.locations);
    } else {
      this.showEpisodes(this.episodes);
    }
  },
  showCharacters() {

  },
  showLocations() {

  },
  showEpisodes() {
    let cards = '';
    for (let i = 0; i < this.episodes.length; i += 1) {
      cards += this.buildCards(this.episodes[i]);
    }
    this.elements.episodeCards.innerHTML += cards;
  },
  buildCards(episode) {
    return `
    <div class="card" style="width: 18rem;">
      <img src="/img/wp3277665.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${episode.name}</h5>
        <h6 class="card-title">${episode.episode}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  },

};

rickAndMorty.fetchInit();
