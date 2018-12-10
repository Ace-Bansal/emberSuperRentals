export default function() {
  this.namespace = '/api';

  this.get('/rentals', function(){
    return {
      data: [
        {
          type: 'rentals',
          id: 'first-mansion',
          attributes: {
            name: 'First Mansion',
            city: 'Dehradun',
            price: 4500000
          }
        },
        {
          type: 'rentals',
          id: 'second-casa',
          attributes: {
            name: 'Second Casa',
            city: 'Delhi',
            price: 90000000
          }
        },
        {
          type: 'rentals',
          id: 'third-adobe',
          attributes: {
            name: 'Third Adobe',
            city: 'Mumbai',
            price: 76000000
          }
        }        
      ]
    }
  })
}
