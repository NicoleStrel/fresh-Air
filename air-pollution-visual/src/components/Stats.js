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
                        <th>Total Pollution ( tonnes x 10<sup>3</sup> )</th>
                        <th>Types of Pollutants</th>
                    </tr>
                </thead>
                <tbody>
                {
                
                this.props.data.map(function(item, index){
                    
                    if (item.hexcode !== '#FFFBD6'){
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
                            <td>
                                <NavLink className="navlink stats-link" to={"/"+item.cou}>
                                <div className="name-flag">
                                    <Flag className="stats-flag" code={item.cou} fallback={ <span>Unknown</span> } width="40"/>
                                    <p className="country-name">{item.name}</p>
                                </div>
                                </NavLink>
                            </td>
                            <td className="stats-tonnes">{item.tonnes}</td>
                            <td>
                                <ul>
                                    {
                                item.pollutants.map(function(pol){
                                    return <li>{pol.name}</li>
                                })
                                }
                                </ul>
                            </td>
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