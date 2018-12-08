import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            
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
});
