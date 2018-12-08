export default function() {
  this.namespace = '/api';

  this.get('/rentals', function(){
    return {
      data: [
        {
          id: 'First Mansion',
          city: 'Dehradun',
          price: 4500000
        },
        {
          id: 'Second Casa',
          city: 'Delhi',
          price: 90000000
        },
        {
          id: 'Third Adobe',
          city: 'Mumbai',
          price: 450000000
        }
      ]
    }
  })
}
