(function(){
	angular.module("fijiapp")
		   .controller("fijiController",['$scope','$http',function ($scope,$http){
		   
		    $http({
			  		method: 'GET',
			 		url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
			 	}).then(function(response){
					  	if (response.status == 200){	
					  		//alert("200 ok")
			 				$scope.products = response.data.products;
						}else{
							alert("404");
						}

					});

			}]);
})();