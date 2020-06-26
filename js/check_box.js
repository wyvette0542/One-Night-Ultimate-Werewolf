// Code goes here

var app = angular.module('App', []);
app.controller('CheckBoxCtroller', function($scope) {	

        $scope.model = {};

        // This property will be bound to checkbox in table header
        $scope.model.allItemsSelected = false;

        // Here first initialize all name list
        $scope.model.entities = [
            { "key": 1, "value": "Werewolf" },
            { "key": 2, "value": "Werewolf" },
            { "key": 3, "value": "Seer" },
            { "key": 4, "value": "Troublemaker" },
            { "key": 5, "value": "Drunk" },
            { "key": 6, "value": "Robber" },
            { "key": 7, "value": "Villager" }
        ];

        // This executes when entity in table is checked
        $scope.selectEntity = function () {
            // If any entity is not checked, then uncheck the "allItemsSelected" checkbox
            for (var i = 0; i < $scope.model.entities.length; i++) {
                if (!$scope.model.entities[i].isChecked) {
                    $scope.model.allItemsSelected = false;
                    return;
                }
            }

            //If not the check the "allItemsSelected" checkbox
            $scope.model.allItemsSelected = true;
        };

        // This executes when checkbox in table header is checked
        $scope.selectAll = function () {
            // Loop through all the entities and set their isChecked property
            for (var i = 0; i < $scope.model.entities.length; i++) {
                $scope.model.entities[i].isChecked = $scope.model.allItemsSelected;
            }
        };

        $scope.countPlayer = function() {
            var count = 0
            for (var i = 0; i < $scope.model.entities.length; i++) {
                if ($scope.model.entities[i].isChecked) {
                    count++
                }
            }
            if (count < 4) {
                $scope.numPlayer = 0
                count = 0
            } else {
                $scope.numPlayer = count - 3
            }
        }
  
});
