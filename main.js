
var id_handle = document.querySelector('input[name=id_handle]');
console.log(id_handle.value);

var client = ShopifyBuy.buildClient({
    domain: 'istryCosmetics.myshopify.com',
    storefrontAccessToken: '5077a97b14abc0c873e64b48b3caa088'
  });

var ui = ShopifyBuy.UI.init(client);



ui.createCart({}).then(function(cart){console.log(cart);})

var test = ui.createComponent('product', {
    id: id_handle.value,
	node: document.getElementById('test'),
    options: {
      product: {
		  width: '100%',
		 buttonDestination: 'modal',
		 layout: 'horizontal',
          contents: {
             description: true,
		     button: false,
		     buttonWithQuantity: true
		  
			}
        
		}
    }

}).then(function(product){console.log(product);})
