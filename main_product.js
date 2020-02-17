
var id_product = document.querySelector('input[name=id_handle]');
console.log(id_product.value);


var client = ShopifyBuy.buildClient({
    domain: 'istryCosmetics.myshopify.com',
    storefrontAccessToken: '5077a97b14abc0c873e64b48b3caa088'
  });

var ui = ShopifyBuy.UI.init(client);

ui.createCart({}).then(function(cart){console.log(cart);})

ui.createComponent('product', {
    id: id_product.value,
	node: document.getElementById('product'),
    options: {
      product: {
		 width: '100%',
		 layout: 'horizontal',
          contents: {
			 img: false,
			 imgWithCarousel: true,
             description: true,
		     button: false,
		     buttonWithQuantity: true
		  
			}
        
		}
    }

}).then(function(product){console.log(product);})

