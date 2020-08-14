import React from 'react';
import data from '../data/airemission.json';

/*returns country name and total tonnes polluted that year*/
const readBasicData =(cou, year) =>{
    console.log  ("hiii")
    var tonnes=calculateTonnes(cou, year);
    if (tonnes ==0){
        tonnes="No data"
    }
    
    else{
        tonnes=(Math.round(tonnes*100))/100
    }
    const item = data.filter(d => d.Cou == cou); //gives list of every item that matches this
    //console.log (item[0].Country)
    return {
        "name": item[0].Country,
        "tonnes": tonnes
    }
}



const calculateTonnes=(cou, year) =>{
    var tonnes=0; //*10^3
    data.map ((data) =>{
        if (data.Cou == cou && data.Year == year){
           // console.log (data.Cou)
            if (data.Unit != "Index" && data.Variable != "Total emissions per capita"){ //must be in tonnes
                //console.log ("new addition: ", data.Value, ", unit: ", data.Unit, ",variable: ", data.Variable);
                
                tonnes=tonnes+parseFloat(data.Value)
            }
        }
    });
    return tonnes
}

export default readBasicData