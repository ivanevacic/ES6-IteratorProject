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

//call first profile function
nextProfile();


function nextProfile() {
    const currentProfile = profiles.next().value;
    //Iterate trough profiles until we iterate trough them all
    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = 
        `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = 
        `<img src="${currentProfile.image}">`;
    }
    else {
        //No more profiles to iterate trough
            //Reload page
                window.location.reload();
    }  
}

//Add event listener to html element with id of next
    //Listen for on click event,then call nextProfile function
        document.getElementById('next').addEventListener('click', nextProfile);

