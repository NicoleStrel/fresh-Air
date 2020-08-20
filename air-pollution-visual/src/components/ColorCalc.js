/*
-----COLOR CALCULATION-----
*/
/*pollutant intensities are  not cosidered right now, just the total!*/
/*will make a more sophisticated calc soon!*/ 

const generateGradient = () =>{
    //pattterns in grey colors:
        //1 through f
        //num 0 num 0 num 0
        //black -> #000000 , white -> #ffffff

    var numerals=['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a','b', 'c', 'd', 'e', 'f'];
    var gradient=[];
    for (let i=0; i<numerals.length; i++){
        for (let j=0; j<numerals.length; j++){
            var hexcode= '#' + numerals[i] + numerals[j] + numerals[i] + numerals[j] + numerals[i] + numerals[j];
            gradient.push (hexcode);
        }
    }
    return gradient
}

/* -- Starting vals --*/
//no pollution->white (index zero)
var highpol=610000; //black color
var gradient=generateGradient().reverse();
var numcolors= gradient.length;
var eachstep=highpol/numcolors;


const colorCalc =(totalPol)=>{
    // "No data" ->yellow 
    if (totalPol == "No data"){
        return ['#FFFBD6', 0 ];
    }
    else{
        var index=Math.round(totalPol/eachstep);
        return [gradient[index], index ];
    }
}



export default colorCalc