
var client = ShopifyBuy.buildClient({
    domain: 'istryCosmetics.myshopify.com',
    storefrontAccessToken: '5077a97b14abc0c873e64b48b3caa088'
  });

var ui = ShopifyBuy.UI.init(client);

var test = ui.createComponent('product', {
    id: 4552641904779,
	node: document.getElementById('test'),
    options: {
      product: {
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
