// 1.Convert radian to degree

function radianToDegree(radian){
    const degree = radian * (180 / Math.PI);
    if(typeof radian !== 'number'){
        return 'Please enter a number';
    }

    return degree.toFixed(2);
}

/* ======================================================= */




// 2. check whether the given file name is a javaScript file or not

function isJavascriptFile(fileName){
    const extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    if(extension.toLowerCase() === 'js'){ 
        return true; 
    } 
    return false;
}

/* ======================================================= */




// 3. calculate the total oil price that I have to pay

function oilPrice(diesel, petrol, octane){
    let dieselPrice = diesel * 114;
    let petrolPrice = petrol * 130;
    let octanePrice = octane * 135;


    if(typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number'){
        return 'Please enter a number';
    }

    const totalAmount = dieselPrice + petrolPrice + octanePrice;

    return totalAmount;
}

/* ======================================================= */




// 4. Public Bus Fair calculate

function publicBusFair(passengerQuantity){
    let reservedBus = passengerQuantity % 50;
    let microbus = reservedBus % 11;
    let busFair = microbus * 250;

    if(typeof passengerQuantity !== 'number'){
        return 'Please enter a number';
    }

    return busFair;
}

/* ======================================================= */



// 5. Function object equality

function isBestFriend(friend1, friend2) {

    if (friend1.name === friend2.friend && friend2.friend === friend1.name && friend1.friend === friend2.name){
        return true; 
    }

    return false;
}


/* ====================================0000000000000000000000000================================== */