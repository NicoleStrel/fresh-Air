import data from '../data/airemission.json';

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
    return {
        "cou" : cou,
        "name": item[0].Country,
        "tonnes": tonnes
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
/*
-----COLOR CALCULATION-----
*/
/*pollutant intensities are  not cosidered right now, just the total!*/
/*will make a more sophisticated calc soon!*/
const colorCalc =(totatPol)=>{

}


const generateDataList= (year, couTags) =>{
    var list=[]
    for (let cou in couTags){
        list.push(readBasicData(couTags[cou], year))
    }
    console.log(list)
    return list

}

export default generateDataList