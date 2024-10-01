export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                { id: '1', firstName: 'Yash', lastName: 'Prasad', description: 'Frontend Coach', price: 599 },
                { id: '2', firstName: 'Nishant', lastName: 'Patil', description: 'Backend Coach', price: 585 },
                { id: '3', firstName: 'Koustob', lastName: 'Mani', description: 'Career Coach', price: 399 },
                { id: '4', firstName: 'Pradeep', lastName: 'Deshpande', description: 'Backend Coach', price: 600 },
                { id: '5', firstName: 'Anushree', lastName: 'Kulkarni', description: 'Frontend Coach', price: 699 },
                { id: '6', firstName: 'Abhinav', lastName: 'Kulkarni', description: 'Career Coach', price: 450 },
            ]
        };
    },
    getters: {
        coach(state) {
            return state.coaches;
        
        }
    }
};
