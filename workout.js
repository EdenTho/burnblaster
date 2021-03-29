class WorkoutCalculator {

    constructor(gradient, weight, speed, time, distance) {
        this.gradient;
        this.speed;
        this.time;
        this.distance;
        this.weight;
    }

    time = (distance, speed) => distance / speed * 60;
    speed = (distance, time) => distance / time * 60;
    distance = (time, speed) => speed * time / 60;

    actualSpeed = () => this.speed + this.speed * this.gradient * 9 / 200;
    actualDistance = () => this.actualSpeed * this.time / 60;
    
}

class MetsCalculator {
    constructor(Workout) {
        this.Workout;
    }

    calculateCalories = (Workout) => (actualSpeed * 1000 / 60 + 17.5) * time * weight / 1000;

    calculateMets() {
        return cal / weight / time * 60;
    };

}

//if user choses imperial option convert to metric for calculation
class MetricConverter {
    convertSpeed = function () {
        speedMetric = this.speed * 1.609344;
    };
    convertDistance = function () {
        distanceMetric = this.distance * 1.609344;
    };
    convertWeight = function () {
        weightMetric = this.weight * 0.454;
    };
}

class WorkoutComponent {
    gradient = document.getElementById("gradient").value;
    speed = document.getElementById("speed").value;
    time = document.getElementById("time").value;
    distance = document.getElementById("distance").value;
    weight = document.getElementById("weight").value;
}

// document.getElementById = "selector";

let workoutVar = new WorkoutComponent;
const workout = new WorkoutCalculator(workoutVar.gradient, workoutVar.speed, workoutVar.time, workoutVar.distance, workoutVar.weight);
// const workout = new WorkoutCalculator("15%", "10kmph", "60min", "10km", "50kg");
// workout.setTime;

console.log(workout.distance);
