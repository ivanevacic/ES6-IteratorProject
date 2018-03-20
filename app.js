//hardcoded mock data
const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'California',
        image: 'https://randomuser.me/api/portraits/men/63.jpg'
    },
    {
        name: 'Travis Belfort',
        age: 19,
        gender: 'male',
        lookingFor: 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    },
    {
        name: 'Alyssa McMahon',
        age: 25,
        gender: 'female',
        lookingFor: 'male',
        location: 'San Diego',
        image: 'https://randomuser.me/api/portraits/women/46.jpg'
    },
    {
        name: 'Jenn Smith',
        age: 36,
        gender: 'female',
        lookingFor: 'male',
        location: 'Sydney',
        image: 'https://randomuser.me/api/portraits/women/23.jpg'
    }
];

//Iterator function
function profileIterator(profiles) {
    //counter
    let nextIndex = 0;

    return {
        next: function() {
            //if nextIndex is less then passed profiles length
                //return object with value for each profile,then send done as false(because it's not done iterating yet)
                    //else return done as true because it's done iterating trough all profiles
                    return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} : {done: true}
        }
    };
}

const profiles = profileIterator(data);