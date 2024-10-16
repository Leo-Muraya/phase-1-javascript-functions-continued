// code your solution here
function saturdayFun (activity = "roller-skate"){  
     return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("Dog racing");

function mondayWork(what = "go to the office"){
    return `This Monday, I will ${what}.`;
}
mondayWork();
mondayWork("be at the site");

// function wrapAdjective(defaultText = "*"){
    
//     return `You are ${defaultText}`
// }

// wrapAdjective('');

function wrapAdjective(highlight = "*") {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}
