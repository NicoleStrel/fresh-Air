import React from 'react';
import Flag from 'react-world-flags';
import { NavLink } from 'react-router-dom';

class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Intensity</th>
                        <th>Country</th>
                        <th>Total Pollution(tonnes x 10^3)</th>
                        <th>Types of Pollutants</th>
                    </tr>
                </thead>
                <tbody>
                {
                
                this.props.data.map(function(item, index){
                    
                    if (item.hexcode != '#FFFBD6'){
                        var divStyle = {
                            backgroundColor: item.hexcode,
                            border: '1px solid grey',
                        }
                        return <tr>
                            <td>{index+1}</td>
                            <td>
                                <div style={divStyle} className="intensity" >
                                </div>
                            </td>
                            <td><NavLink className="navlink" to={"/"+item.cou}>
                                <div><Flag code={item.cou} fallback={ <span>Unknown</span> } width="30"/>
                                <p>{item.name}</p>
                                </div>
                                </NavLink>
                            </td>
                            <td>{item.tonnes}</td>
                            <td>{
                            item.pollutants.map(function(pol){
                                return <p>{pol.name}</p>
                            })
                            }</td>
                        </tr>    
                    }
                })
                        
                }
                 </tbody>
                </table>
            </div>
            
         </div>
        )
     }
}
export default Stats;

/*{
            this.props.data.map((dataitem) => {
                <p>{dataitem.name}</p>
            })
            }*/