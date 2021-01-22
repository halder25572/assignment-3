
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}


function budgetCalculator(watch, mobile, laptop ){
    var watch = 50;
    var mobile = 100;
    var laptop = 500;
    var totalEqual =watch * mobile * laptop;
    if(watch === 50 * undefined){
        watch * undefined;
    }else if(mobile === 100){
        mobile * undefined;
    }else if(laptop === 500){
        laptop * undefined;
    }
    return totalEqual;
}


function hotelDay(){
    var hotelTotal = 0;
    if(hotelDay<=10){
        hotelTotal = hotelDay * 100;
    }else if(hotelDay<=20){
        var first10 = 10 * 100;
        var remaining = depth - 10;
        var seceond10 = remaining * 100;
    }else{
        var first10 = 10 * 50;
        var seceond10 = 10 * 100;
        var remaining = depth - 20;
        var third10 = remaining * 50;
        hotelTotal = first10 + seceond10 + third10;
    }
    return hotelTotal;
}


function megaFriend(){
    var name = ['Bishawjeet', 'Nayan' ];
    var max = name[0];
    for(var i = 0; i <name.length; i++){
    var element = name[i];
    if(element > max){
        max = element;
        }   
    }
    return name;
}