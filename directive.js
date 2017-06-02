angular.module('app').directive('mainDirective', function(){
    return {
        // restrict: 'AE',
        templateUrl: 'directiveTemplate.html',
        scope: {
            atr: '='
        }
        
    }
})

// html being transfered over to a custom tag that we created