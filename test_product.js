/*console.log(document.querySelectorAll('#product'));*/


var id_product = document.querySelectorAll('#product'), i;
/*console.log(id_product);*/
/*console.log(id_product.dataset.product)*/



var color_id = document.querySelector('input[name=color]');
console.log(color_id.value);


var client = ShopifyBuy.buildClient({
    domain: 'istryCosmetics.myshopify.com',
    storefrontAccessToken: '5077a97b14abc0c873e64b48b3caa088'
  });

var ui = ShopifyBuy.UI.init(client);

for (i=0; i < id_product.length; ++i) {
ui.createComponent('product', {
    id: id_product[i].dataset.product,
	node: id_product[i],
    options: {
      product: {
		 iframe: false,
		 width: '100%',
		 layout: 'horizontal',
          contents: {
			 img: false,
			 imgWithCarousel: false,
			 title: false,
			 price: false,
			 unitPrice: false,
			 options: false,
			 quantityInput: false,
             description: false,
		     button: true,
		     buttonWithQuantity: false,
			},
			text: {
				button: 'add to cart',
			},
			styles: {
				button: {
					'background-color': 'black',
					':hover': {
						'background-color': color_id.value,
					}
				}
			}
        
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
		}
    }

}).then(function(product){console.log(product);})
}


