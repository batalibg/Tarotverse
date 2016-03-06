/**
 * Created by shane on 2/13/2016.
 */
angular.module('lodash', [])

  .factory('_', ['$window', function($window) {
    return $window._; // assumes underscore has already been loaded on the page
  }])

.factory ('StorageService',  function($localStorage) {

  $localStorage = $localStorage.$default({
    readings: [],
    notification: [],
    cards: [
      {cardName: 'The Fool', cardImage: '/img/theFool.jpg', cardURL: 'app.theFool'},
      {cardName: 'The Magician', cardImage: '/img/theMagician.jpg', cardURL: 'app.theMagician'},
      {cardName: 'The High Priestess', cardImage: '/img/theHighPriestess.jpg', cardURL: 'app.theHighPriestess'},
      {cardName: 'The Empress', cardImage: '/img/theEmpress.jpg', cardURL: 'app.theEmpress'},
      {cardName: 'The Emperor', cardImage: '/img/theEmperor.jpg', cardURL: 'app.theEmperor'},
      {cardName: 'The Hierophant', cardImage: '/img/theHierophant.jpg', cardURL: 'app.theHierophant'},
      {cardName: 'The Lovers', cardImage: '/img/theLovers.jpg', cardURL: 'app.theLovers'},
      {cardName: 'The Chariot', cardImage: '/img/theChariot.jpg', cardURL: 'app.theChariot'},
      {cardName: 'Justice', cardImage: '/img/justice.jpg', cardURL: 'app.justice'},
      {cardName: 'The Hermit', cardImage: '/img/theHermit.jpg', cardURL: 'app.theHermit'},
      {cardName: 'The Wheel of Fortune', cardImage: '/img/theWheel.jpg', cardURL: 'app.theWheel'},
      {cardName: 'Strength', cardImage: '/img/strength.jpg', cardURL: 'app.strength'},
      {cardName: 'The Hanged Man', cardImage: '/img/theHangedMan.jpg', cardURL: 'app.theHangedMan'},
      {cardName: 'Death', cardImage: '/img/death.jpg', cardURL: 'app.death'},
      {cardName: 'Temperance', cardImage: '/img/temperance.jpg', cardURL: 'app.temperance'},
      {cardName: 'The Devil', cardImage: '/img/theDevil.jpg', cardURL: 'app.theDevil'},
      {cardName: 'The Tower', cardImage: '/img/theTower.jpg', cardURL: 'app.theTower'},
      {cardName: 'The Star', cardImage: '/img/theStar.jpg', cardURL: 'app.theStar'},
      {cardName: 'The Moon', cardImage: '/img/theMoon.jpg', cardURL: 'app.theMoon'},
      {cardName: 'The Sun', cardImage: '/img/theSun.jpg', cardURL: 'app.theSun'},
      {cardName: 'Judgement', cardImage: '/img/judgement.jpg', cardURL: 'app.judgement'},
      {cardName: 'The World', cardImage: '/img/theWorld.jpg', cardURL: 'app.theWorld'},
      {cardName: 'Ace of Cups', cardImage: '/img/aceOfCups.jpg', cardURL: 'app.aceOfCups'},
      {cardName: 'Two of Cups', cardImage: '/img/twoOfCups.jpg', cardURL: 'app.twoOfCups'},
      {cardName: 'Three of Cups', cardImage: '/img/threeOfCups.jpg', cardURL: 'app.threeOfCups'},
      {cardName: 'Four of Cups', cardImage: '/img/fourOfCups.jpg', cardURL: 'app.fourOfCups'},
      {cardName: 'Five of Cups', cardImage: '/img/fiveOfCups.jpg', cardURL: 'app.fiveOfCups'},
      {cardName: 'Seven of Cups', cardImage: '/img/sevenOfCups.jpg', cardURL: 'app.sixOfCups'},
      {cardName: 'Eight of Cups', cardImage: '/img/eightOfCups.jpg', cardURL: 'app.eightOfCups'},
      {cardName: 'Nine of Cups', cardImage: '/img/nineOfCups.jpg', cardURL: 'app.nineOfCups'},
      {cardName: 'Ten of Cups', cardImage: '/img/tenOfCups.jpg', cardURL: 'app.tenOfCups'},
      {cardName: 'Page of Cups', cardImage: '/img/pageOfCups.jpg', cardURL: 'app.pageOfCups'},
      {cardName: 'Knight of Cups', cardImage: '/img/knightOfCups.jpg', cardURL: 'app.knightOfCups'},
      {cardName: 'Queen of Cups', cardImage: '/img/queenOfCups.jpg', cardURL: 'app.queenOfCups'},
      {cardName: 'King of Cups', cardImage: '/img/kingOfCups.jpg', cardURL: 'app.kingOfCups'},
      {cardName: 'Ace of Pentacles', cardImage: '/img/aceOfPentacles.jpg', cardURL: 'app.aceOfPentacles'},
      {cardName: 'Two of Pentacles', cardImage: '/img/twoOfPentacles.jpg', cardURL: 'app.twoOfPentacles'},
      {cardName: 'Three of Pentacles', cardImage: '/img/threeOfPentacles.jpg', cardURL: 'app.threeOfPentacles'},
      {cardName: 'Four of Pentacles', cardImage: '/img/fourOfPentacles.jpg', cardURL: 'app.fourOfPentacles'},
      {cardName: 'Five of Pentacles', cardImage: '/img/fiveOfPentacles.jpg', cardURL: 'app.fiveOfPentacles'},
      {cardName: 'Six of Pentacles', cardImage: '/img/sixOfPentacles.jpg', cardURL: 'app.sixOfPentacles'},
      {cardName: 'Seven of Pentacles', cardImage: '/img/sevenOfPentacles.jpg', cardURL: 'app.sevenOfPentacles'},
      {cardName: 'Eight of Pentacles', cardImage: '/img/eightOfPentacles.jpg', cardURL: 'app.eightOfPentacles'},
      {cardName: 'Nine of Pentacles', cardImage: '/img/nineOfPentacles.jpg', cardURL: 'app.nineOfPentacles'},
      {cardName: 'Ten of Pentacles', cardImage: '/img/tenOfPentacles.jpg', cardURL: 'app.tenOfPentacles'},
      {cardName: 'Page of Pentacles', cardImage: '/img/pageOfPentacles.jpg', cardURL: 'app.pageOfPentacles'},
      {cardName: 'Knight of Pentacles', cardImage: '/img/knightOfPentacles.jpg', cardURL: 'app.knightOfPentacles'},
      {cardName: 'Queen of Pentacles', cardImage: '/img/queenOfPentacles.jpg', cardURL: 'app.queenOfPentacles'},
      {cardName: 'King of Pentacles', cardImage: '/img/kingOfPentacles.jpg', cardURL: 'app.kingOfPentacles'},
      {cardName: 'Ace of Wands', cardImage: '/img/aceOfWands.jpg', cardURL: 'app.aceOfWands'},
      {cardName: 'Two of Wands', cardImage: '/img/twoOfWands.jpg', cardURL: 'app.twoOfWands'},
      {cardName: 'Three of Wands', cardImage: '/img/threeOfWands.jpg', cardURL: 'app.threeOfWands'},
      {cardName: 'Four of Wands', cardImage: '/img/fourOfWands.jpg', cardURL: 'app.fourOfWands'},
      {cardName: 'Five of Wands', cardImage: '/img/fiveOfWands.jpg', cardURL: 'app.fiveOfWands'},
      {cardName: 'Six of Wands', cardImage: '/img/sixOfWands.jpg', cardURL: 'app.sixOfWands'},
      {cardName: 'Seven of Wands', cardImage: '/img/sevenOfWands.jpg', cardURL: 'app.sevenOfWands'},
      {cardName: 'Eight of Wands', cardImage: '/img/eightOfWands.jpg', cardURL: 'app.eightOfWands'},
      {cardName: 'Nine of Wands', cardImage: '/img/nineOfWands.jpg', cardURL: 'app.nineOfWands'},
      {cardName: 'Ten of Wands', cardImage: '/img/tenOfWands.jpg', cardURL: 'app.tenOfWands'},
      {cardName: 'Page of Wands', cardImage: '/img/pageOfWands.jpg', cardURL: 'app.pageOfWands'},
      {cardName: 'Knight of Wands', cardImage: '/img/knightOfWands.jpg', cardURL: 'app.knightOfWands'},
      {cardName: 'Queen of Wands', cardImage: '/img/queenOfWands.jpg', cardURL: 'app.queenOfWands'},
      {cardName: 'King of Wands', cardImage: '/img/kingOfWands.jpg', cardURL: 'app.kingOfWands'},
      {cardName: 'Ace of Swords', cardImage: '/img/aceOfSwords.jpg', cardURL: 'app.aceOfSwords'},
      {cardName: 'Two of Swords', cardImage: '/img/twoOfSwords.jpg', cardURL: 'app.twoOfSwords'},
      {cardName: 'Three of Swords', cardImage: '/img/threeOfSwords.jpg', cardURL: 'app.threeOfSwords'},
      {cardName: 'Four of Swords', cardImage: '/img/fourOfSwords.jpg', cardURL: 'app.fourOfSwords'},
      {cardName: 'Five of Swords', cardImage: '/img/fiveOfSwords.jpg', cardURL: 'app.fiveOfSwords'},
      {cardName: 'Six of Swords', cardImage: '/img/sixOfSwords.jpg', cardURL: 'app.sixOfSwords'},
      {cardName: 'Seven of Swords', cardImage: '/img/sevenOfSwords.jpg', cardURL: 'app.sevenOfSwords'},
      {cardName: 'Eight of Swords', cardImage: '/img/eightOfSwords.jpg', cardURL: 'app.eightOfSwords'},
      {cardName: 'Nine of Swords', cardImage: '/img/nineOfSwords.jpg', cardURL: 'app.nineOfSwords'},
      {cardName: 'Ten of Swords', cardImage: '/img/tenOfSwords.jpg', cardURL: 'app.tenOfSwords'},
      {cardName: 'Page of Swords', cardImage: '/img/pageOfSwords.jpg', cardURL: 'app.pageOfSwords'},
      {cardName: 'Knight of Swords', cardImage: '/img/knightOfSwords.jpg', cardURL: 'app.knightOfSwords'},
      {cardName: 'Queen of Swords', cardImage: '/img/queenOfSwords.jpg', cardURL: 'app.queenOfSwords'},
      {cardName: 'King of Swords', cardImage: '/img/kingOfSwords.jpg', cardURL: 'app.kingOfSwords'}
    ]
  });


  var _getAllReadings = function () {
    return $localStorage.readings;
  };
  var _getAllCards = function () {
    return _.shuffle($localStorage.cards);
  };
  var _getNotification = function () {
    return $localStorage.notification;
  };
  var _addSpread = function (readingDate, notes, readingDealtInfo, spread, headerClass, spreadURL, query) {
    $localStorage.readings.push({'readingDate': readingDate, 'notes': notes, 'readingDealtInfo': readingDealtInfo, 'spread': spread, 'headerClass': headerClass, 'spreadURL': spreadURL, 'query': query});
  };
  var _addCardOfTheDay = function (readingDate, notes, readingDealtInfo, spread, headerClass) {
    $localStorage.readings.push({'readingDate': readingDate, 'notes': notes, 'readingDealtInfo': readingDealtInfo, 'spread': spread, 'headerClass': headerClass});
  };
  var _addNotification = function (toggle) {
    $localStorage.notification.push(toggle);
  };
  var _remove = function (readingDate, notes, readingDealtInfo, spread, headerClass, spreadURL, query) {
    $localStorage.readings.splice($localStorage.readings.indexOf({'readingDate': readingDate, 'notes': notes, 'readingDealtInfo': readingDealtInfo, 'spread': spread, 'headerClass': headerClass, 'spreadURL': spreadURL, 'query': query}), 1);
  };

  var _removeAll = function () {
    $localStorage.readings.length = 0;
  };

  return {
    getAllReadings: _getAllReadings,
    getAllCards: _getAllCards,
    getNotification: _getNotification,
    addNotification: _addNotification,
    addSpread: _addSpread,
    addCardOfTheDay: _addCardOfTheDay,
    remove: _remove,
    removeAll: _removeAll
  };
});
