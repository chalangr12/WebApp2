var app = angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
var time;
var email;


app.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
          console.log(newWidth);

    slides.push(
    {
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<5; i++) {
    $scope.addSlide();
  }
});


app.controller('DatepickerDemoCtrl', function ($scope,$log) 
{
  $scope.items = getStates();
  $scope.today = function() {
    $scope.dt = new Date();
  };
  //$scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate =  new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
           settingPickUpdate = $scope.pickUpDate;
        if (dayToCheck === currentDay) {
          settingPickUpdate = $scope.pickUpDate;
          return $scope.events[i].status;
        }
      }
    }

    return '';  
  };


   $scope.submitPickUp = function(firstName,lastName, emailAddress,address,suiteApt,city,state,zipCode,form)
   {
    if(firstName != null || lastName != null || emailAddress != null ||address != null || suiteApt != null || city == null || state != null || zipCode != null )
    { 
       $scope.firstName=firstName;
       $scope.lastName=lastName;
       $scope.emailAddress=emailAddress;
       $scope.address=address;
       $scope.suiteApt=suiteApt;
       $scope.city=city;
       $scope.state=state;
       $scope.zipCode=zipCode;
       $scope.pickUpTime=time;
       console.log(time.getHours())
       var hours =  time.getHours() <= 12  ? time.getHours() : time.getHours()-12;
       var amPM =   time.getHours() < 12  ? " AM" : " PM";

       var mintues = time.getMinutes().toString().length == 1? "0"+time.getMinutes():time.getMinutes();
       $scope.timeToPickup = hours +":" +  mintues + amPM;
       $scope.settingPickUpdate = formatDate(settingPickUpdate);
        email ={
            'loc': form,
            'firstName': firstName,
            'lastName': lastName,
            'emailAddress': emailAddress,
            'address': address,
            'suiteApt': suiteApt,
            'city': city,
            'state': state,
            'zipCode': zipCode,
            'pickUpDate': $scope.settingPickUpdate,
            'pickUpTime': $scope.timeToPickup
              }
          
          console.log('email here: ' + email.loc)
      }
      $scope.confirm = function()
      {
        console.log(email.firstName)
        var sent = setPickUpDateValues(email.loc,email.firstName,email.lastName,email.emailAddress,email.address,email.suiteApt,email.city, email.state,email.zipCode,email.settingPickUpdate,email.pickUpTime,email);
        $("#success").css('visibility', 'visible')
        location.reload();

      }
    }




$scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1],
    mstep: [5]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
    time = $scope.mytime
 };

  $scope.clear = function() {
    $scope.mytime = null;
  };
});
