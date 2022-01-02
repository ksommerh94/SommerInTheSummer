export default class Trip{
  constructor(place,country,type,budget,people=1){
    this.place = place
    this.country = country
    this.type = type
    this.budget = budget
    this.people = people
  }
}

export function printTypePeople(trip){
  console.log(`This trips is ${trip.type} with ${trip.people} people`);
}
