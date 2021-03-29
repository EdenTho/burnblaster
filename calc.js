function calc() {

    //y=jpn :: y_00=eng
    if (document.f.y000[0].checked) {
        speedEng = speed; speed = speed * 1.61;
    } else {
        speed = speed; speedEng = speed / 1.61;
    }
    if (document.f.d000[0].checked) { 
        d_00 = distance; distance = distance * 1.61; 
    } else { 
        distance = distance; d_00 = distance / 1.61; 
    }
    if (document.f.m000[0].checked) { 
        weightEng = weight; weight = weight * 0.454; 
    } else {
        weight = weight;
        weightEng = weight / 0.454; 
        }

    if ((speed == 0) && (time != 0)) {
        speed = distance / time * 60;
        speedEng = speed / 1.61; 
        }  //y...v(km/h)
    if ((time == 0) && (speed != 0)) {
         time = distance / speed * 60; 
        }  //z...time(min)
    if (distance == 0) {
        distance = speed * time / 60;
        d_00 = distance / 1.61; 
        }  //d...distance(km)


    speed0Grad = speed + speed * gradient * 9 / 200;
    speedEng0Grad = speedEng + speedEng * gradient * 9 / 200;

    time0Grad = time;
    distance0Grad = speed0Grad * time / 60;
    distanceEng0Grad = speedEng0Grad * time / 60;

    cal = (speed0Grad * 1000 / 60 + 17.5) * time * weight / 1000;
    mets = cal / weight / time * 60;

    s100 = 360 / speed0Grad;  		//100m for sec

    m10k = Math.floor(600 / speed0Grad);		//10K for min
    s10k = ((600 / speed0Grad) - m10k) * 60;


    m21k = 21.095 * 60 / speed0Grad;	//Half for min

    m21kh = Math.floor(m21k / 60);
    m21km = Math.floor(m21k - m21kh * 60);
    m21ks = ((m21k - m21kh * 60) - m21km) * 60;

    m42k = 42.195 * 60 / speed0Grad;	//Full for min
    m42kh = Math.floor(m42k / 60);
    m42km = Math.floor(m42k - m42kh * 60);
    m42ks = ((m42k - m42kh * 60) - m42km) * 60;
    myrecord = m42k / 60;


}

function calculateSevenMinuteMile(actualSpeed){

    s100 = 360 / actualSpeed;  		//100m for sec

    m10k = Math.floor(600 / actualSpeed);		//10K for min
    s10k = ((600 / actualSpeed) - m10k) * 60;


    m21k = 21.095 * 60 / actualSpeed;	//Half for min

    m21kh = Math.floor(m21k / 60);
    m21km = Math.floor(m21k - m21kh * 60);
    m21ks = ((m21k - m21kh * 60) - m21km) * 60;

    m42k = 42.195 * 60 / actualSpeed;	//Full for min
    m42kh = Math.floor(m42k / 60);
    m42km = Math.floor(m42k - m42kh * 60);
    m42ks = ((m42k - m42kh * 60) - m42km) * 60;
    myrecord = m42k / 60;
}