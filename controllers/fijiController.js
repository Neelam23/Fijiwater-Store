(function(){
	angular.module("fijiapp")
		   .controller("fijiController",['$scope','$http',function ($scope,$http){
		   
		   	var discountPercent =.25;
		    $scope.cart = [];
		    $scope.checkboxValue = false;


		    $http({
			  		method: 'GET',
			 		url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js'
			 	}).then(function(response){
					  	if (response.status == 200){	
					  		//alert("200 ok")
		  				    $scope.discount = 1;
			 				$scope.meta = response.data.products.meta;
			 				$scope.products = response.data.products;
						}else{
							alert("error 404");
						}

					});
			 	

		     $scope.changePrice = function(checkboxValue){
				checkboxValue = true;
				$scope.discount = discountPercent;
				};

			$scope.addToCart = function(product){
				//alert(product.name)
				if($scope.cart.indexOf(product)< 0){
					$scope.cart.push(product);	
					alert("Added to the cart");
					// $scope.count =1;
				}else{
					// $scope.count +=1;
					alert("product already in cart");
					}
		 	   }

		 	$scope.removeFromCart = function(item){
				// alert("Sure, you want to remove this item?")
				var index = $scope.cart.indexOf(item);
				$scope.cart.splice(index, 1);

		 	   }
		 	

			 
			   

			}]);
})();

