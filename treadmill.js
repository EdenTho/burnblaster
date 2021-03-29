function convertToZeroGradient(gradient, speed, speedImperial, time) {
    actualSpeed = speed + speed * gradient * 9 / 200;
    actualSpeedImperial = speedImperial + speedImperial * gradient * 9 / 200;

    actualDistance = actualSpeed * time / 60;
    actualDistanceImperial = actualSpeedImperial * time / 60;

}

class Workout {
    speed = getSpeed;
    distance = getDistance;
    weight = getWeight;
}

function calculateCalories(actualSpeed, time, weight) {
    cal = (actualSpeed * 1000 / 60 + 17.5) * time * weight / 1000;
}

function calculateMets(calories, time, weight) {
    mets = calories / weight / time * 60;
}

function getSpeed() {
    if (document.f.y000[0].checked) {
        speedImperial = speed;
        speed = speed * 1.61;
    } else {
        speed = speed;
        speedImperial = speed / 1.61;
    }
}

function getDistance() {
    if (document.f.d000[0].checked) {
        distanceImperial = distance;
        distance = distance * 1.61;
    } else {
        distance = distance;
        distanceImperial = distance / 1.61;
    }
}

function getWeight() {
    if (document.f.m000[0].checked) {
        weightImperial = weight;
        weight = weight * 0.454;
    } else {
        weight = weight;
        weightImperial = weight / 0.454;
    }

}

function calculateSpeed(speed = 0, time, distance) {
    if ((speed == 0) && (time != 0)) {
        speed = distance / time * 60;
        speedImperial = speed / 1.61;
    }  //y...v(km/h)
}

function calculateTime(time = 0, speed, distance) {
    if ((time == 0) && (speed != 0)) {
        time = distance / speed * 60;
    }  //z...time(min)
}

function calculateDistance(distance = 0, speed, time) {
    if (distance == 0) {
        distance = speed * time / 60;
        distanceImperial = distance / 1.61;
    }  //d...distance(km)

}