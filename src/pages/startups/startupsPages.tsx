import { createData } from './helpers/pageDataFactory';
import { structureCinema } from './pages/cinema/dataStructure';
import { structureGames } from './pages/games/dataStructure';
import { structureVision } from './pages/dataStructure';

// GENERATE ALL STARTUP PAGES
export const dataPageVision = createData(structureVision.visionPage);
export const dataPageMVP = createData(structureVision.MVPPage);

// CINEMA INDUSTRY
export const dataPageCinema = createData(structureCinema.cinemaPage);
export const dataPageEuropeanUkrainians = createData(structureCinema.europeanUkrainiansPage);
export const dataPageTheCorp = createData(structureCinema.theCorpPage);

// Movies
export const dataPageHeShe = createData(structureCinema.heShePage);
export const dataPageOnceInUkraine = createData(structureCinema.onceInUkrainePage);
export const dataPageVolynWedding = createData(structureCinema.volynWeddingPage);

// Cartoons
export const dataPageWoodenFiction = createData(structureCinema.woodenFictionPage);
export const dataPageLilithsAdventure = createData(structureCinema.lilithsAdventurePage);

// Self Presentation Projects
export const dataPageSelfPresentation = createData(structureCinema.selfPresentationPage);
export const dataPagePodcastShow = createData(structureCinema.podcastShowPage);
export const dataPageGodEvening = createData(structureCinema.godEveningPage);

// GAMES INDUSTRY
export const dataPageGames = createData(structureGames.gamesPage);
export const dataPageSichSaga = createData(structureGames.sichSagaPage);
export const dataPageSichSagaPart1 = createData(structureGames.sichSaga1Page);
export const dataPageSichSagaPart2 = createData(structureGames.sichSaga2Page);
export const dataPageSichSagaPart3 = createData(structureGames.sichSaga3Page);
