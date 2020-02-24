
//var id_product = document.querySelector('input[name=id_handle]');
//console.log(id_product.value);


var client = ShopifyBuy.buildClient({
    domain: 'istryCosmetics.myshopify.com',
    storefrontAccessToken: '5077a97b14abc0c873e64b48b3caa088'
  });

var ui = ShopifyBuy.UI.init(client);


ui.createComponent('product', {
    id: '4552642560139',
    options: {
      product: {
		  width: '0%',
		  height: '0%',
		  layout: 'vertical',
		  buttonDestination: 'cart',
		  hidden: true,
          contents: {
             description: false,
		     button: false,
		     buttonWithQuantity: false,
			 title: false,
			 price: false,
			 image: false,
			 options: false,
			 quantityInput: false,
		  
			}
        
		},
		toggle: {
			styles: {
				toggle: {
					'background-color': 'black',
					':hover': {
						'background-color': '#454545',
					}
				}
			}
		}
    }

}).then(function(product){console.log(product);})

