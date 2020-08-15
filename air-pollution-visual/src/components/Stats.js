import React from 'react';
import Flag from 'react-world-flags';

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
                    
                this.props.data.map(function(item){
                    return <tr>
                        <td>1</td>
                        <td>
                            <div className="intensity">
                            </div>
                        </td>
                        <td>
                            <div><Flag code={item.cou} fallback={ <span>Unknown</span> } width="30"/>
                            <p>{item.name}</p>
                            </div>
                        </td>
                        <td>{item.tonnes}</td>
                        <td>n/a</td>
                    </tr>    
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