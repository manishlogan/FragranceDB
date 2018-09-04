import React from 'react';
import PerfumesData from './data/perfumesData';
import PerfumeSearchResults from './perfumeSearchResults';
import './css/index.css'

class Perfumes extends React.Component{
constructor(props){
    super(props);

    this.state = {
        perfumeName : '',
        perfumes : PerfumesData.perfumes,
        filteredPerfumes: PerfumesData.perfumes
    }

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event){   
    let queryString = event.target.value;
    let filteredPerfumes = this.state.perfumes.filter(obj =>
        obj.perfumeName.toLowerCase().includes(queryString.toLowerCase()) || 
        obj.house.toLowerCase().includes(queryString.toLowerCase())
    );

    this.setState({perfumeName: queryString,
        filteredPerfumes: filteredPerfumes});
}

    render(){
        return(
            <div class="container">                
                <div>
                    <input type="text" value={this.state.perfumeName} onChange={this.handleChange} class="col-md-12"
                    placeholder="Enter Perfume to search"/>  
                </div>
                <div id="searchResults">{
                    this.state.filteredPerfumes.map(function(perfume){
                        return <div><PerfumeSearchResults value={perfume}/></div>
                    })}
                </div>
            </div>
        );
    }
}

export default Perfumes;