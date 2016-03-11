function ngLocator(Locator){
  var Link = function(scope, element, attrs){
    scope.location = {};
    
    function init(location){
      console.log(location);
      scope.location.coords = location;
      var mapContainer = element[0].getElementsByClassName('locator-map')[0],
          autoCompleteInput = element[0].getElementsByClassName('locator-autocomplete')[0];
    }
    
    Locator.getLocation().then(init);
  };
  
  return {
    restrict: 'E',
    templateUrl: '../../views/locator.html',
    scope: {
      location: '='
    },
    link: Link,
    controller: angular.noop,
    controllerAs: 'locator'
  };
}

ngLocator.$injects = ['Locator'];

angular.module('locator')
.directive('ngLocator', ngLocator);