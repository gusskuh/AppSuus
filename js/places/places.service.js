import utilService from '../services/util.service.js'
import storageService from '../services/storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from '../services/event-bus.service.js'


const KEY = 'placesApp';

let gId = 0;
const placesDB = [

    {
        name: 'Tel Aviv',
        description: 'Non stop city',
        id: 1,
        photos: 'img/1.jpg',
        lat: 32.0852999,
        lng: 34.78176759999999,
        tag: '',

    },
    {
        name: 'New York',
        description: 'Best place in the world',
        id: 2,
        photos: 'img/2.jpg',
        lat: 40.7127753,
        lng: -74.0059728,
        tag: '',
    },
    {
        name: 'Shanghi',
        description: 'Special city',
        id: 3,
        photos: 'img/3.jpg',
        lat: 31.2303904,
        lng: 121.4737021,
        tag: '',
    },
    {
        name: 'Roma',
        description: 'Historical city',
        id: 4,
        photos: 'img/4.jpg',
        lat: 31.2303904,
        lng: 121.4737021,
        tag: '',
    },
    {
        name: 'Beit Shean',
        description: 'Small city with nice pepole',
        id: 5,
        photos: 'img/5.jpg',
        lat: 31.2303904,
        lng: 121.4737021,
        tag: '',
    },
    {
        name: 'Bucharest',
        description: 'Nice city',
        id: 6,
        photos: 'img/6.jpg',
        lat: 31.2303904,
        lng: 121.4737021,
        tag: '',
    },

]
const loadPlaces = () => storageService.load(KEY);

function query(filter = null) {
    var places = loadPlaces()
    if (!places) places = placesDB;
    storageService.store(KEY, places)
    return Promise.resolve(places)
}

function getById(placeId) {
    return storageService.load(KEY)
        .then(places => {
            return places.find(place => place.id === placeId);
        })
}

function deletePlace(placeId) {
    var places = storageService.load(KEY);
    var placeIdx = places.findIndex(place => place.id === placeId);
    places.splice(placeIdx, 1);
    storageService.store(KEY, places);
    return Promise.resolve(places)
}


function savePlace(place) {
    return storageService.load(KEY)
        .then(places => {
            if (place.id) {
                var placeIdx = places.findIndex(currplace => currplace.id === place.id)
                places.splice(placeIdx, 1, place);
            } else {
                place.id = places.length+1;
                places.push(place);
            }
            return storageService.store(KEY, places);
        });
}


export default {
    query,
    getById,
    deletePlace,
    savePlace
}