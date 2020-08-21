import data from '../data/airemission.json';
import colorCalc from './ColorCalc';

/*returns country name and total tonnes polluted that year*/
const readData =(cou, year) =>{
    var [tonnes, pollutants]=calculateTonnesAndRead(cou, year);
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
        "pollutants": pollutants,
        "largestPol" :calcLargestPol (pollutants),
    }
}


const calculateTonnesAndRead=(cou, year) =>{
    var tonnes=0; //*10^3
    var pollutants=[];
    var pollutantnames=[];
    var poltotal=0;
    //for each pollutant ...
    var polvars=[];
    var polvarnames=[];

    data.map ((data) =>{
        if (data.Cou === cou && data.Year === year){
           //filter data:
            if (data.Unit !== "Index" && data.Variable !== "Total emissions per capita" && data.Variable !=="Total emissions per unit of GDP" && data.Variable !== "Total emissions per unit of GDP, Kg per 1000 USD" && data.Variable !=="Total emissions, Index 2000 = 100"){ 
                //console.log ("new addition: ", data.Value, ", unit: ", data.Unit, ",variable: ", data.Variable);
                if (!(pollutantnames.includes(data.Pollutant))){
                    if (pollutants.length >0){
                        let idx=pollutants.length-1;
                        pollutants[idx].amount=(Math.round(poltotal*100))/100;
                    }
                    pollutants.push({
                        "name": data.Pollutant,
                        "amount": 0,
                        "polvars":polvars
                    });
                    pollutantnames.push(data.Pollutant);
                    poltotal=0;
                    polvars.length=0;
                    polvarnames.length=0;
                }
                tonnes=tonnes+parseFloat(data.Value);
                poltotal=poltotal+parseFloat(data.Value);

                //for each pollutant ..
                polvars.push({
                    "var": data.Variable,
                    "amount": parseFloat(data.Value),
                });
                polvarnames.push(data.Variable); //test theseeeeeeee ///hereeeee
            }
        }
    });
    //when done, add the last pollutant:
    if (pollutants.length >0){
        let idx=pollutants.length-1;
        pollutants[idx].amount=(Math.round(poltotal*100))/100;
    }
    return [tonnes, pollutants]
}
const calcLargestPol=(pollutants)=>{
    var largest="";
    var largestval=0;
    for (let i in pollutants){
        if (pollutants[i].amount > largestval){
            largest=pollutants[i].name;
            largestval=pollutants[i].amount;
        }
    }
    return largest
}



const generateDataList= (year, couTags) =>{
    var list=[];
    for (let cou in couTags){
        var data=readData(couTags[cou], year);
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