(function(){
	angular.module("fijiapp")
		   .controller("fijiController",['$scope','$http',function ($scope,$http){
		   
		   	var discountPercent =.25;
		    $scope.cart = [];


		    $http({
			  		method: 'GET',
			 		url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
			 	}).then(function(response){
					  	if (response.status == 200){	
					  		//alert("200 ok")
					  		$scope.wholesale = false;
		  				    $scope.retail = true;
		  				    $scope.discount = 1;
			 				$scope.meta = response.data.products.meta;
			 				$scope.products = response.data.products;
						}else{
							alert("error 404");
						}

					});

		     $scope.changePrice = function(){
				$scope.wholesale = true;
				$scope.retail = false;
				$scope.discount = discountPercent;
				};

			$scope.addToCart = function(product){
				//alert(product.name)
		 		$scope.cart.push(product);
		 	   }
		 	$scope.removeFromCart = function(item){
				//alert(product.name)
		 		$scope.cart.pull(item);
		 	   }
		 	

			 
			   

			}]);
})();

