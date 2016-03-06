angular.module('Tarotverse.controllers', ['lodash', 'ngStorage', 'angularSlideables'])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
  })

  .controller('NotificationController', function ($scope, $cordovaLocalNotification, StorageService) {

    $scope.notification = StorageService.getNotification();
    $scope.pushNotification = $scope.notification;

    $scope.pushNotificationChange = function (toggle) {
      $scope.addNotification(toggle);
      console.log($scope.pushNotification);
      if ($scope.pushNotification == true) {
        $scope.scheduleSingleNotification();
      } else $scope.cancelSingleNotification();
    };

    $scope.addNotification = function (notification) {
      StorageService.addNotification(notification);
    };

    $scope.scheduleSingleNotification = function () {
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Tarotverse',
        text: 'Your Card of the Day is ready for you!',
        icon: '/img/tarotLogoActionBar.jpg',
        every: 'minute'
      }).then(function (result) {

      });
    };

    $scope.cancelSingleNotification = function () {
      $cordovaLocalNotification.cancel(1).then(function (result) {
        console.log('Notification 1 Canceled');
      });
    };


  })

  .controller('StorageCtrl', function ($scope, StorageService, $ionicSideMenuDelegate, $ionicScrollDelegate, $location, 
    $ionicPopup, $ionicHistory, $state) {

    $scope.showDeleteConfirm = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete Reading',
        template: 'Are you sure you want to clear your journal of all readings?',
        buttons: [
          {text: 'No'},
          {
            text: 'Yes',
            type: 'grey-background white',
            onTap: function (res) {
              if (res) {
                $scope.removeAll();
                $state.go('app.journal');
              } else {
                confirmPopup.close();
              }
            }
          }
        ]

      });

    };

    $scope.clearNav = function(){

      $ionicHistory.nextViewOptions({
      disableBack: true
      });


    };

    $scope.readings = StorageService.getAllReadings();
    $scope.cardNames = StorageService.getAllCards();
    $scope.newDate = new Date();

    $scope.addSpread = function (newDate, notes, newReadingInfo, spreadToAdd, headerClass, spreadURL, query) {
      StorageService.addSpread(newDate, notes, newReadingInfo, spreadToAdd, headerClass, spreadURL, query);
    };

    $scope.addCardOfTheDay = function (newDate, notes, newReadingInfo, spreadToAdd, headerClass) {
      StorageService.addSpread(newDate, notes, newReadingInfo, spreadToAdd, headerClass);
    };

    $scope.remove = function (newDate, notes, newReadingInfo, spreadToAdd, headerClass, spreadURL, query) {
      StorageService.remove(newDate, notes, newReadingInfo, spreadToAdd, headerClass, spreadURL, query);
    };

    $scope.removeAll = function () {
      StorageService.removeAll();
    };

    $scope.showReading = function () {
      $scope.hiddenReading = true;
    };

    $scope.slideTo = function (location) {
      location = $location.hash(location);
      console.log('scrolling to: ' + location);
      $ionicScrollDelegate.$getByHandle('mainScroll').anchorScroll("#" + location);
    };

    $scope.scrollToTop = function () {
      $ionicScrollDelegate.scrollTop();
    };


  })

