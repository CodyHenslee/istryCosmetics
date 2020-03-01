var id_collection = document.querySelector('input[name=id_collection]');
console.log(id_collection.value);

var color_id = document.querySelector('input[name=color]');
console.log(color_id.value);

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
		  iframe: false,
		  isButton: true,
		  buttonDestination: 'modal',
          contents: {
             description: false,
		     button: false,
		     buttonWithQuantity: false,
			},
			styles: {
				product: {
				'float': 'center',
				'min-width': '235px', 
				},
				button: {
					'background-color': 'black',
					':hover': {
						'background-color': color_id.value,
					}
				}
			},
        
		},
		toggle: {
			iframe: false,
			styles: {
				toggle: {
					'background-color': 'black',
					':hover': {
						'background-color': color_id.value,
					}
				}
			}
		},
		modal: {
			iframe: false,
		},
	    modalProduct: {
		  contents: {
			  img: false,
			  imgWithCarousel: true,
			  button: false,
		      buttonWithQuantity: true,
			  
			}
		},
		cart: {
			iframe: false,
			styles: {
				button: {
					'background-color': 'black',
					':hover': {
						'background-color': color_id.value,
					}
				}
			}
		},
    }

}).then(function(collection){console.log(collection);})
