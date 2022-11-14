import TripSchema from './models/Trip.js';

console.log('running updatedb');

// console.log(TripSchema.created.type.toString());
// console.log(TripSchema.created.default.toString());
// console.log(TripSchema.created.type.toString().includes('String'));


//console.log(Object.keys(TripSchema)[1]);
//console.log(Object.entries(TripSchema));

console.log(Object.keys(TripSchema));
const props = Object.keys(TripSchema);
props.forEach(e => {
    console.log('name: ' + e);
    console.log('object: ' + TripSchema[e]);
    console.log('type: ' + TripSchema[e].type);
    console.log('default: ' + TripSchema[e].default);
    console.log('------------');
});

//Object.entries(TripSchema).forEach(prop => console.log(prop))