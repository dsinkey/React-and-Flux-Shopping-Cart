module.exports = {

  init: function(){

    localStorage.clear();

    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Sam Adams Boston Lager',
        image: 'sam-adams.png',
        description: 'Samuel Adams uses a traditional brewing processes, including decoction mash (a four vessel process) and krausening (a secondary fermentation), which allows the ingredients in Samuel Adams Boston Lager to come together and form layers of complex flavor. Boston Lager is also dry hopped using the Hallertau Mittelfrueh hops for an enhanced hop signature in the aroma and finish.',
        variants: [
          {
            sku: '123123',
            type: '40oz Bottle',
            price: '4.99',
            inventory: 1

          },
          {
            sku: '123124',
            type: '6 pack',
            price: '8.50',
            inventory: 3

          },
          {
            sku: '123125',
            type: '12 pack',
            price: '12.99',
            inventory: 5

          }
        ]
      }
    ]));
  }
};