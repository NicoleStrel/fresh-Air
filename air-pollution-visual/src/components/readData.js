import data from '../data/airemission.json';
import colorCalc from './ColorCalc';

/*returns country name and total tonnes polluted that year*/
const readBasicData =(cou, year) =>{
    var tonnes=calculateTonnes(cou, year);
    if (tonnes === 0){
        tonnes="No data"
    }
    
    else{
        tonnes=(Math.round(tonnes*100))/100
    }
    const item = data.filter(d => d.Cou === cou); //gives list of every item that matches this
    //console.log (item[0].Country)
    var color =colorCalc(tonnes);
    return {
        "cou" : cou,
        "name": item[0].Country,
        "tonnes": tonnes,
        "hexcode": color[0],
        "hexidx": color[1],
    }
}


const calculateTonnes=(cou, year) =>{
    var tonnes=0; //*10^3
    data.map ((data) =>{
        if (data.Cou === cou && data.Year === year){
           //filter data:
            if (data.Unit !== "Index" && data.Variable !== "Total emissions per capita" && data.Variable !=="Total emissions per unit of GDP" && data.Variable !== "Total emissions per unit of GDP, Kg per 1000 USD" && data.Variable !=="Total emissions, Index 2000 = 100"){ 
                //console.log ("new addition: ", data.Value, ", unit: ", data.Unit, ",variable: ", data.Variable);
                
                tonnes=tonnes+parseFloat(data.Value)
            }
        }
    });
    return tonnes
}



const generateDataList= (year, couTags) =>{
    var list=[];
    for (let cou in couTags){
        var data=readBasicData(couTags[cou], year);
        list.push(data)
    }
    var sorted=bubble_sort_data(list);
    return sorted;

}

function bubble_sort_data(list){
    var swapp;
    var last = list.length-1;
    var newlist=list;
    do {
        swapp = false;
        for (var i=0; i < last; i++){
            var compare1;
            if (newlist[i].tonnes == "No data"){
                compare1=0;
            }
            else{
                compare1=parseFloat(newlist[i].tonnes);
            }
            var compare2; 
            if (newlist[i+1].tonnes == "No data"){
                compare2=0;
            }
            else{
                compare2=parseFloat(newlist[i+1].tonnes);
            }

            if (compare1 < compare2){
               var temp = newlist[i];
               newlist[i] = newlist[i+1];
               newlist[i+1] = temp;
               swapp = true;
            }
        }
        last--;
    } while (swapp);
 return newlist; 
}


export default generateDataList