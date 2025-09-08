import { createData } from './helpers/pageDataFactory';

import { startupsStructure } from './pages/startupsStructure';

import { cinemaStructure } from './pages/cinemaStructure';
import { structureCinema } from './pages/cinema/structureCinema';
import { structureSelfPresentation } from './pages/cinema/SelfPresentation/structureSelfPresentation';

import { gamesStructure } from './pages/gamesStructure';
import { structureGames } from './pages/games/structureGames';
import { structureSichSaga } from './pages/games/SichSaga/structureSichSaga';

// GENERATE ALL STARTUP PAGES
export const dataPageVision = createData(startupsStructure.visionPage);
export const dataPageMVP = createData(startupsStructure.MVPPage);

// CINEMA INDUSTRY
export const dataPageCinema = createData(cinemaStructure.cinemaPage);
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
export const dataPageSelfPresentation = createData(structureSelfPresentation.selfPresentationPage);
export const dataPagePodcastShow = createData(structureSelfPresentation.podcastShowPage);
export const dataPageGodEvening = createData(structureSelfPresentation.godEveningPage);

// GAMES INDUSTRY
export const dataPageGames = createData(gamesStructure.gamesPage);
export const dataPageSichSaga = createData(structureSichSaga.sichSagaPage);
export const dataPageSichSagaPart1 = createData(structureGames.sichSaga1Page);
export const dataPageSichSagaPart2 = createData(structureGames.sichSaga2Page);
export const dataPageSichSagaPart3 = createData(structureGames.sichSaga3Page);
