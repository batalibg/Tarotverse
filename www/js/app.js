angular.module('tarot', ['ionic', 'Tarotverse.controllers', 'ngStorage', 'ngCordova'])

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.scrolling.jsScrolling(true);
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.spreads', {
    url: '/spreads',
    views: {
      'menuContent': {
        templateUrl: 'templates/spreads.html'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html'
      }
    }
  })

    .state('app.encyclopedia', {
      url: '/encyclopedia',
      views: {
        'menuContent': {
          templateUrl: 'templates/encyclopedia.html'
        }
      }
    })

    .state('app.eula', {
      url: '/eula',
      views: {
        'menuContent': {
          templateUrl: 'templates/eula.html'
        }
      }
    })

  .state('app.upgrade', {
    url: '/upgrade',
    views: {
      'menuContent': {
        templateUrl: 'templates/upgrade.html'
      }
    }
  })

    .state('app.options', {
      url: '/options',
      views: {
        'menuContent': {
          templateUrl: 'templates/options.html'
        }
      }
    })

    .state('app.cardOfTheDay', {
      url: '/cardOfTheDay',
      views: {
        'menuContent': {
          templateUrl: 'templates/cardOfTheDay.html'
        }
      }
    })

    .state('app.read', {
      url: '/read',
      views: {
        'menuContent': {
          templateUrl: 'templates/read.html'
        }
      }
    })

    .state('app.journal', {
      url: '/journal',
      views: {
        'menuContent': {
          templateUrl: 'templates/journal.html'
        }
      }
    })

    .state('app.theFool', {
      url: '/theFool',
      views: {
        'menuContent': {
          templateUrl: 'templates/theFool.html'
        }
      }
    })

    .state('app.theMagician', {
      url: '/theMagician',
      views: {
        'menuContent': {
          templateUrl: 'templates/theMagician.html'
        }
      }
    })

    .state('app.theHighPriestess', {
      url: '/theHighPriestess',
      views: {
        'menuContent': {
          templateUrl: 'templates/theHighPriestess.html'
        }
      }
    })

    .state('app.theEmpress', {
      url: '/theEmpress',
      views: {
        'menuContent': {
          templateUrl: 'templates/theEmpress.html'
        }
      }
    })

    .state('app.theEmperor', {
      url: '/theEmperor',
      views: {
        'menuContent': {
          templateUrl: 'templates/theEmperor.html'
        }
      }
    })

    .state('app.theHierophant', {
      url: '/theHierophant',
      views: {
        'menuContent': {
          templateUrl: 'templates/theHierophant.html'
        }
      }
    })

    .state('app.theLovers', {
      url: '/theLovers',
      views: {
        'menuContent': {
          templateUrl: 'templates/theLovers.html'
        }
      }
    })

    .state('app.theChariot', {
      url: '/theChariot',
      views: {
        'menuContent': {
          templateUrl: 'templates/theChariot.html'
        }
      }
    })

    .state('app.justice', {
      url: '/justice',
      views: {
        'menuContent': {
          templateUrl: 'templates/justice.html'
        }
      }
    })

    .state('app.theHermit', {
      url: '/theHermit',
      views: {
        'menuContent': {
          templateUrl: 'templates/theHermit.html'
        }
      }
    })

    .state('app.theWheel', {
      url: '/theWheel',
      views: {
        'menuContent': {
          templateUrl: 'templates/theWheel.html'
        }
      }
    })

    .state('app.strength', {
      url: '/strength',
      views: {
        'menuContent': {
          templateUrl: 'templates/strength.html'
        }
      }
    })

    .state('app.theHangedMan', {
      url: '/theHangedMan',
      views: {
        'menuContent': {
          templateUrl: 'templates/theHangedMan.html'
        }
      }
    })

    .state('app.death', {
      url: '/death',
      views: {
        'menuContent': {
          templateUrl: 'templates/death.html'
        }
      }
    })

    .state('app.temperance', {
      url: '/temperance',
      views: {
        'menuContent': {
          templateUrl: 'templates/temperance.html'
        }
      }
    })

    .state('app.theDevil', {
      url: '/theDevil',
      views: {
        'menuContent': {
          templateUrl: 'templates/theDevil.html'
        }
      }
    })

    .state('app.theTower', {
      url: '/theTower',
      views: {
        'menuContent': {
          templateUrl: 'templates/theTower.html'
        }
      }
    })

    .state('app.theStar', {
      url: '/theStar',
      views: {
        'menuContent': {
          templateUrl: 'templates/theStar.html'
        }
      }
    })

    .state('app.theMoon', {
      url: '/theMoon',
      views: {
        'menuContent': {
          templateUrl: 'templates/theMoon.html'
        }
      }
    })

    .state('app.theSun', {
      url: '/theSun',
      views: {
        'menuContent': {
          templateUrl: 'templates/theSun.html'
        }
      }
    })

    .state('app.judgement', {
      url: '/judgement',
      views: {
        'menuContent': {
          templateUrl: 'templates/judgement.html'
        }
      }
    })

    .state('app.theWorld', {
      url: '/theWorld',
      views: {
        'menuContent': {
          templateUrl: 'templates/theWorld.html'
        }
      }
    })

    .state('app.aceOfCups', {
      url: '/aceOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/aceOfCups.html'
        }
      }
    })

    .state('app.twoOfCups', {
      url: '/twoOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/twoOfCups.html'
        }
      }
    })

    .state('app.threeOfCups', {
      url: '/threeOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/threeOfCups.html'
        }
      }
    })

    .state('app.fourOfCups', {
      url: '/fourOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/fourOfCups.html'
        }
      }
    })

    .state('app.fiveOfCups', {
      url: '/fiveOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/fiveOfCups.html'
        }
      }
    })

    .state('app.sixOfCups', {
      url: '/sixOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/sixOfCups.html'
        }
      }
    })

    .state('app.sevenOfCups', {
      url: '/sevenOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/sevenOfCups.html'
        }
      }
    })

    .state('app.eightOfCups', {
      url: '/eightOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/eightOfCups.html'
        }
      }
    })

    .state('app.nineOfCups', {
      url: '/nineOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/nineOfCups.html'
        }
      }
    })

    .state('app.tenOfCups', {
      url: '/tenOfCupss',
      views: {
        'menuContent': {
          templateUrl: 'templates/tenOfCups.html'
        }
      }
    })

    .state('app.pageOfCups', {
      url: '/pageOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageOfCups.html'
        }
      }
    })

    .state('app.knightOfCups', {
      url: '/knightOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/knightOfCups.html'
        }
      }
    })

    .state('app.queenOfCups', {
      url: '/queenOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/queenOfCups.html'
        }
      }
    })

    .state('app.kingOfCups', {
      url: '/kingOfCups',
      views: {
        'menuContent': {
          templateUrl: 'templates/kingOfCups.html'
        }
      }
    })

    .state('app.aceOfPentacles', {
      url: '/aceOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/aceOfPentacles.html'
        }
      }
    })

    .state('app.twoOfPentacles', {
      url: '/twoOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/twoOfPentacles.html'
        }
      }
    })

    .state('app.threeOfPentacles', {
      url: '/threeOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/threeOfPentacles.html'
        }
      }
    })

    .state('app.fourOfPentacles', {
      url: '/fourOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/fourOfPentacles.html'
        }
      }
    })

    .state('app.fiveOfPentacles', {
      url: '/fiveOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/fiveOfPentacles.html'
        }
      }
    })

    .state('app.sixOfPentacles', {
      url: '/sixOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/sixOfPentacles.html'
        }
      }
    })

    .state('app.sevenOfPentacles', {
      url: '/sevenOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/sevenOfPentacles.html'
        }
      }
    })

    .state('app.eightOfPentacles', {
      url: '/eightOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/eightOfPentacles.html'
        }
      }
    })

    .state('app.nineOfPentacles', {
      url: '/nineOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/nineOfPentacles.html'
        }
      }
    })

    .state('app.tenOfPentacles', {
      url: '/tenOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/tenOfPentacles.html'
        }
      }
    })

    .state('app.pageOfPentacles', {
      url: '/pageOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageOfPentacles.html'
        }
      }
    })

    .state('app.knightOfPentacles', {
      url: '/knightOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/knightOfPentacles.html'
        }
      }
    })

    .state('app.queenOfPentacles', {
      url: '/queenOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/queenOfPentacles.html'
        }
      }
    })

    .state('app.kingOfPentacles', {
      url: '/kingOfPentacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/kingOfPentacles.html'
        }
      }
    })

    .state('app.aceOfWands', {
      url: '/aceOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/aceOfWands.html'
        }
      }
    })

    .state('app.twoOfWands', {
      url: '/twoOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/twoOfWands.html'
        }
      }
    })

    .state('app.threeOfWands', {
      url: '/threeOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/threeOfWands.html'
        }
      }
    })

    .state('app.fourOfWands', {
      url: '/fourOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/fourOfWands.html'
        }
      }
    })

    .state('app.fiveOfWands', {
      url: '/fiveOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/fiveOfWands.html'
        }
      }
    })

    .state('app.sixOfWands', {
      url: '/sixOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/sixOfWands.html'
        }
      }
    })

    .state('app.sevenOfWands', {
      url: '/sevenOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/sevenOfWands.html'
        }
      }
    })

    .state('app.eightOfWands', {
      url: '/eightOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/eightOfWands.html'
        }
      }
    })

    .state('app.nineOfWands', {
      url: '/nineOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/nineOfWands.html'
        }
      }
    })

    .state('app.tenOfWands', {
      url: '/tenOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/tenOfWands.html'
        }
      }
    })

    .state('app.pageOfWands', {
      url: '/pageOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageOfWands.html'
        }
      }
    })

    .state('app.knightOfWands', {
      url: '/knightOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/knightOfWands.html'
        }
      }
    })

    .state('app.queenOfWands', {
      url: '/queenOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/queenOfWands.html'
        }
      }
    })

    .state('app.kingOfWands', {
      url: '/kingOfWands',
      views: {
        'menuContent': {
          templateUrl: 'templates/kingOfWands.html'
        }
      }
    })

    .state('app.aceOfSwords', {
      url: '/aceOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/aceOfSwords.html'
        }
      }
    })

    .state('app.twoOfSwords', {
      url: '/twoOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/twoOfSwords.html'
        }
      }
    })

    .state('app.threeOfSwords', {
      url: '/threeOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/threeOfSwords.html'
        }
      }
    })

    .state('app.fourOfSwords', {
      url: '/fourOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/fourOfSwords.html'
        }
      }
    })

    .state('app.fiveOfSwords', {
      url: '/fiveOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/fiveOfSwords.html'
        }
      }
    })

    .state('app.sixOfSwords', {
      url: '/sixOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/sixOfSwords.html'
        }
      }
    })

    .state('app.sevenOfSwords', {
      url: '/sevenOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/sevenOfSwords.html'
        }
      }
    })

    .state('app.eightOfSwords', {
      url: '/eightOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/eightOfSwords.html'
        }
      }
    })

    .state('app.nineOfSwords', {
      url: '/nineOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/nineOfSwords.html'
        }
      }
    })

    .state('app.tenOfSwords', {
      url: '/tenOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/tenOfSwords.html'
        }
      }
    })

    .state('app.pageOfSwords', {
      url: '/pageOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/pageOfSwords.html'
        }
      }
    })

    .state('app.knightOfSwords', {
      url: '/knightOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/knightOfSwords.html'
        }
      }
    })

    .state('app.queenOfSwords', {
      url: '/queenOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/queenOfSwords.html'
        }
      }
    })

    .state('app.kingOfSwords', {
      url: '/kingOfSwords',
      views: {
        'menuContent': {
          templateUrl: 'templates/kingOfSwords.html'
        }
      }
    })

    .state('app.spreadAnnual', {
      url: '/spreadAnnual',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadAnnual.html'
        }
      }
    })

    .state('app.spreadCelticCross', {
      url: '/spreadCelticCross',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadCelticCross.html'
        }
      }
    })

    .state('app.spreadCheckingTheDirection', {
      url: '/spreadCheckingTheDirection',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadCheckingTheDirection.html'
        }
      }
    })

    .state('app.spreadMountainsAndMolehills', {
      url: '/spreadMountainsAndMolehills',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMountainsAndMolehills.html'
        }
      }
    })

    .state('app.spreadOpportunitiesAndObstacles', {
      url: '/spreadOpportunitiesAndObstacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadOpportunitiesAndObstacles.html'
        }
      }
    })

    .state('app.spreadSevenCardHorseshoe', {
      url: '/spreadSevenCardHorseshoe',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSevenCardHorseshoe.html'
        }
      }
    })

    .state('app.spreadShouldYouShouldntYou', {
      url: '/spreadShouldYouShouldntYou',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadShouldYouShouldntYou.html'
        }
      }
    })

    .state('app.spreadSimple', {
      url: '/spreadSimple',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSimple.html'
        }
      }
    })

    .state('app.spreadSingleCard', {
      url: '/spreadSingleCard',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSingleCard.html'
        }
      }
    })

    .state('app.spreadSnapshot', {
      url: '/spreadSnapshot',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSnapshot.html'
        }
      }
    })

    .state('app.spreadStuck', {
      url: '/spreadStuck',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadStuck.html'
        }
      }
    })

    .state('app.spreadThisMonth', {
      url: '/spreadThisMonth',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadThisMonth.html'
        }
      }
    })

    .state('app.spreadThisWeek', {
      url: '/spreadThisWeek',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadThisWeek.html'
        }
      }
    })

    .state('app.spreadThreeCard', {
      url: '/spreadThreeCard',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadThreeCard.html'
        }
      }
    })

    .state('app.spreadTreeOfLife', {
      url: '/spreadTreeOfLife',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadTreeOfLife.html'
        }
      }
    })

    .state('app.spreadChakra', {
      url: '/spreadChakra',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadChakra.html'
        }
      }
    })

    .state('app.spreadChakraBalance', {
      url: '/spreadChakraBalance',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadChakraBalance.html'
        }
      }
    })

    .state('app.spreadPastLife', {
      url: '/spreadPastLife',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadPastLife.html'
        }
      }
    })

    .state('app.spreadRightPath', {
      url: '/spreadRightPath',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadRightPath.html'
        }
      }
    })

    .state('app.spreadSpiritualProgress', {
      url: '/spreadSpiritualProgress',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSpiritualProgress.html'
        }
      }
    })

    .state('app.spreadChallengingChildren', {
      url: '/spreadChallengingChildren',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadChallengingChildren.html'
        }
      }
    })

    .state('app.spreadChild', {
      url: '/spreadChild',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadChild.html'
        }
      }
    })

    .state('app.spreadChildhoodProblems', {
      url: '/spreadChildhoodProblems',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadChildhoodProblems.html'
        }
      }
    })

    .state('app.spreadMissingPet1', {
      url: '/spreadMissingPet1',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMissingPet1.html'
        }
      }
    })

    .state('app.spreadMissingPet2', {
      url: '/spreadMissingPet2',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMissingPet2.html'
        }
      }
    })

    .state('app.spreadMovingHouse', {
      url: '/spreadMovingHouse',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMovingHouse.html'
        }
      }
    })

    .state('app.spreadPet', {
      url: '/spreadPet',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadPet.html'
        }
      }
    })

    .state('app.spreadSiblingRivalry1', {
      url: '/spreadSiblingRivalry1',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSiblingRivalry1.html'
        }
      }
    })

    .state('app.spreadSiblingRivalry2', {
      url: '/spreadSiblingRivalry2',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSiblingRivalry2.html'
        }
      }
    })


    .state('app.spreadCareer', {
      url: '/spreadCareer',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadCareer.html'
        }
      }
    })

    .state('app.spreadExpandingYourBusiness', {
      url: '/spreadExpandingYourBusiness',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadExpandingYourBusiness.html'
        }
      }
    })

    .state('app.spreadFinance', {
      url: '/spreadFinance',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadFinance.html'
        }
      }
    })

    .state('app.spreadMoney', {
      url: '/spreadMoney',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMoney.html'
        }
      }
    })

    .state('app.spreadMoneyProblems', {
      url: '/spreadMoneyProblems',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMoneyProblems.html'
        }
      }
    })

    .state('app.spreadStartingUp', {
      url: '/spreadStartingUp',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadStartingUp.html'
        }
      }
    })

    .state('app.spreadWhichJob', {
      url: '/spreadWhichJob',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadWhichJob.html'
        }
      }
    })

    .state('app.spreadWork', {
      url: '/spreadWork',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadWork.html'
        }
      }
    })

    .state('app.spreadExLover', {
      url: '/spreadExLover',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadExLover.html'
        }
      }
    })

    .state('app.spreadHeartache', {
      url: '/spreadHeartache',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadHeartache.html'
        }
      }
    })

    .state('app.spreadIsItTooLate', {
      url: '/spreadIsItTooLate',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadIsItTooLate.html'
        }
      }
    })

    .state('app.spreadItsNeverTooLate', {
      url: '/spreadItsNeverTooLate',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadItsNeverTooLate.html'
        }
      }
    })

    .state('app.spreadLettingGo', {
      url: '/spreadLettingGo',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadLettingGo.html'
        }
      }
    })

    .state('app.spreadMagicalLove', {
      url: '/spreadMagicalLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMagicalLove.html'
        }
      }
    })

    .state('app.spreadMirrorMirror', {
      url: '/spreadMirrorMirror',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadMirrorMirror.html'
        }
      }
    })

    .state('app.spreadNewRelationship', {
      url: '/spreadNewRelationship',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadNewRelationship.html'
        }
      }
    })

    .state('app.spreadOngoingRelationship', {
      url: '/spreadOngoingRelationship',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadOngoingRelationship.html'
        }
      }
    })

    .state('app.spreadPartnershipAsMirror', {
      url: '/spreadPartnershipAsMirror',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadPartnershipAsMirror.html'
        }
      }
    })

    .state('app.spreadReadyForLove', {
      url: '/spreadReadyForLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadReadyForLove.html'
        }
      }
    })

    .state('app.spreadRelationshipCross', {
      url: '/spreadRelationshipCross',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadRelationshipCross.html'
        }
      }
    })

    .state('app.spreadRelationshipProblems', {
      url: '/spreadRelationshipProblems',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadRelationshipProblems.html'
        }
      }
    })

    .state('app.spreadSheHeIt', {
      url: '/spreadSheHeIt',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSheHeIt.html'
        }
      }
    })

    .state('app.spreadShouldIStay', {
      url: '/spreadShouldIStay',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadShouldIStay.html'
        }
      }
    })

    .state('app.spreadSoulmate', {
      url: '/spreadSoulmate',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSoulmate.html'
        }
      }
    })

    .state('app.spreadSuitability', {
      url: '/spreadSuitability',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadSuitability.html'
        }
      }
    })

    .state('app.spreadTheOne', {
      url: '/spreadTheOne',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadTheOne.html'
        }
      }
    })

    .state('app.spreadTrueFriends', {
      url: '/spreadTrueFriends',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadTrueFriends.html'
        }
      }
    })

    .state('app.spreadWhichLove', {
      url: '/spreadWhichLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadWhichLove.html'
        }
      }
    })

    .state('app.spreadWillIFindTrueLove', {
      url: '/spreadWillIFindTrueLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadWillIFindTrueLove.html'
        }
      }
    })

    .state('app.spreadYoungLove', {
      url: '/spreadYoungLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/spreadYoungLove.html'
        }
      }
    })

    .state('app.readingAnnual', {
      url: '/readingAnnual',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingAnnual.html'
        }
      }
    })

    .state('app.readingCelticCross', {
      url: '/readingCelticCross',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingCelticCross.html'
        }
      }
    })

    .state('app.readingCheckingTheDirection', {
      url: '/readingCheckingTheDirection',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingCheckingTheDirection.html'
        }
      }
    })

    .state('app.readingMountainsAndMolehills', {
      url: '/readingMountainsAndMolehills',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMountainsAndMolehills.html'
        }
      }
    })

    .state('app.readingOpportunitiesAndObstacles', {
      url: '/readingOpportunitiesAndObstacles',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingOpportunitiesAndObstacles.html'
        }
      }
    })

    .state('app.readingSevenCardHorseshoe', {
      url: '/readingSevenCardHorseshoe',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSevenCardHorseshoe.html'
        }
      }
    })

    .state('app.readingShouldYouShouldntYou', {
      url: '/readingShouldYouShouldntYou',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingShouldYouShouldntYou.html'
        }
      }
    })

    .state('app.readingSimple', {
      url: '/readingSimple',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSimple.html'
        }
      }
    })

    .state('app.readingSingleCard', {
      url: '/readingSingleCard',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSingleCard.html'
        }
      }
    })

    .state('app.readingSnapshot', {
      url: '/readingSnapshot',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSnapshot.html'
        }
      }
    })

    .state('app.readingStuck', {
      url: '/readingStuck',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingStuck.html'
        }
      }
    })

    .state('app.readingThisMonth', {
      url: '/readingThisMonth',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingThisMonth.html'
        }
      }
    })

    .state('app.readingThisWeek', {
      url: '/readingThisWeek',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingThisWeek.html'
        }
      }
    })

    .state('app.readingThreeCard', {
      url: '/readingThreeCard',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingThreeCard.html'
        }
      }
    })

    .state('app.readingTreeOfLife', {
      url: '/readingTreeOfLife',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingTreeOfLife.html'
        }
      }
    })

    .state('app.readingChakra', {
      url: '/readingChakra',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingChakra.html'
        }
      }
    })

    .state('app.readingChakraBalance', {
      url: '/readingChakraBalance',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingChakraBalance.html'
        }
      }
    })

    .state('app.readingPastLife', {
      url: '/readingPastLife',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingPastLife.html'
        }
      }
    })

    .state('app.readingRightPath', {
      url: '/readingRightPath',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingRightPath.html'
        }
      }
    })

    .state('app.readingSpiritualProgress', {
      url: '/readingSpiritualProgress',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSpiritualProgress.html'
        }
      }
    })

    .state('app.readingChallengingChildren', {
      url: '/readingChallengingChildren',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingChallengingChildren.html'
        }
      }
    })

    .state('app.readingChild', {
      url: '/readingChild',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingChild.html'
        }
      }
    })

    .state('app.readingChildhoodProblems', {
      url: '/readingChildhoodProblems',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingChildhoodProblems.html'
        }
      }
    })

    .state('app.readingMissingPet1', {
      url: '/readingMissingPet1',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMissingPet1.html'
        }
      }
    })

    .state('app.readingMissingPet2', {
      url: '/readingMissingPet2',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMissingPet2.html'
        }
      }
    })

    .state('app.readingMovingHouse', {
      url: '/readingMovingHouse',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMovingHouse.html'
        }
      }
    })

    .state('app.readingPet', {
      url: '/readingPet',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingPet.html'
        }
      }
    })

    .state('app.readingSiblingRivalry1', {
      url: '/readingSiblingRivalry1',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSiblingRivalry1.html'
        }
      }
    })

    .state('app.readingSiblingRivalry2', {
      url: '/readingSiblingRivalry2',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSiblingRivalry2.html'
        }
      }
    })


    .state('app.readingCareer', {
      url: '/readingCareer',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingCareer.html'
        }
      }
    })

    .state('app.readingExpandingYourBusiness', {
      url: '/readingExpandingYourBusiness',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingExpandingYourBusiness.html'
        }
      }
    })

    .state('app.readingFinance', {
      url: '/readingFinance',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingFinance.html'
        }
      }
    })

    .state('app.readingMoney', {
      url: '/readingMoney',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMoney.html'
        }
      }
    })

    .state('app.readingMoneyProblems', {
      url: '/readingMoneyProblems',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMoneyProblems.html'
        }
      }
    })

    .state('app.readingStartingUp', {
      url: '/readingStartingUp',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingStartingUp.html'
        }
      }
    })

    .state('app.readingWhichJob', {
      url: '/readingWhichJob',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingWhichJob.html'
        }
      }
    })

    .state('app.readingWork', {
      url: '/readingWork',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingWork.html'
        }
      }
    })

    .state('app.readingExLover', {
      url: '/readingExLover',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingExLover.html'
        }
      }
    })

    .state('app.readingHeartache', {
      url: '/readingHeartache',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingHeartache.html'
        }
      }
    })

    .state('app.readingIsItTooLate', {
      url: '/readingIsItTooLate',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingIsItTooLate.html'
        }
      }
    })

    .state('app.readingItsNeverTooLate', {
      url: '/readingItsNeverTooLate',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingItsNeverTooLate.html'
        }
      }
    })

    .state('app.readingLettingGo', {
      url: '/readingLettingGo',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingLettingGo.html'
        }
      }
    })

    .state('app.readingMagicalLove', {
      url: '/readingMagicalLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMagicalLove.html'
        }
      }
    })

    .state('app.readingMirrorMirror', {
      url: '/readingMirrorMirror',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingMirrorMirror.html'
        }
      }
    })

    .state('app.readingNewRelationship', {
      url: '/readingNewRelationship',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingNewRelationship.html'
        }
      }
    })

    .state('app.readingOngoingRelationship', {
      url: '/readingOngoingRelationship',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingOngoingRelationship.html'
        }
      }
    })

    .state('app.readingPartnershipAsMirror', {
      url: '/readingPartnershipAsMirror',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingPartnershipAsMirror.html'
        }
      }
    })

    .state('app.readingReadyForLove', {
      url: '/readingReadyForLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingReadyForLove.html'
        }
      }
    })

    .state('app.readingRelationshipCross', {
      url: '/readingRelationshipCross',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingRelationshipCross.html'
        }
      }
    })

    .state('app.readingRelationshipProblems', {
      url: '/readingRelationshipProblems',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingRelationshipProblems.html'
        }
      }
    })

    .state('app.readingSheHeIt', {
      url: '/readingSheHeIt',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSheHeIt.html'
        }
      }
    })

    .state('app.readingShouldIStay', {
      url: '/readingShouldIStay',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingShouldIStay.html'
        }
      }
    })

    .state('app.readingSoulmate', {
      url: '/readingSoulmate',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSoulmate.html'
        }
      }
    })

    .state('app.readingSuitability', {
      url: '/readingSuitability',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingSuitability.html'
        }
      }
    })

    .state('app.readingTheOne', {
      url: '/readingTheOne',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingTheOne.html'
        }
      }
    })

    .state('app.readingTrueFriends', {
      url: '/readingTrueFriends',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingTrueFriends.html'
        }
      }
    })

    .state('app.readingWhichLove', {
      url: '/readingWhichLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingWhichLove.html'
        }
      }
    })

    .state('app.readingWillIFindTrueLove', {
      url: '/readingWillIFindTrueLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingWillIFindTrueLove.html'
        }
      }
    })

    .state('app.readingYoungLove', {
      url: '/readingYoungLove',
      views: {
        'menuContent': {
          templateUrl: 'templates/readingYoungLove.html'
        }
      }
    });

    


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/read');
});
