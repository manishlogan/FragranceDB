import React from 'react';
import Houses from './data/houseData';

class PerfumeHouses extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            perfumeHouses : Houses.houses,
            filteredHouses: Houses.houses
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let queryString = event.target.value;
        let filteredHouses = this.state.perfumeHouses.filter(obj =>
            obj.name.toLowerCase().includes(queryString.toLowerCase())
        );
    
        this.setState({houseName: queryString,
            filteredHouses: filteredHouses});
    }

    render(){
        return(
            <div>
            <div>
                    <input type="text" value={this.state.houseName} onChange={this.handleChange}/>                    
                </div>
                {
                    this.state.filteredHouses.map(function(house){
                        return <span class="row">{house.name}</span>
                    })
                }
            </div>

        );
    }
}

export default PerfumeHouses;