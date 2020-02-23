var id_collection = document.querySelector('input[name=id_collection]');
console.log(id_collection.value);

var client = ShopifyBuy.buildClient({
    domain: 'istryCosmetics.myshopify.com',
    storefrontAccessToken: '5077a97b14abc0c873e64b48b3caa088'
  });

var ui = ShopifyBuy.UI.init(client);


ui.createComponent('collection', {
    id: id_collection.value,
	node: document.getElementById('collection'),
    options: {
      product: {
		  isButton: true,
		  buttonDestination: 'modal',
          contents: {
             description: false,
		     button: false,
		     buttonWithQuantity: false,
		  
			}
        
		},
		toggle: {
			styles: {
				toggle: {
					'background-color': 'black',
				}
			}
		},
	  modalProduct: {
		  contents: {
			  img: false,
			  imgWithCarousel: true,
			  button: false,
		      buttonWithQuantity: true,
			  
			}
		},
    }

}).then(function(collection){console.log(collection);})
