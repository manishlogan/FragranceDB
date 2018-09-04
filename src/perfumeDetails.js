import React from 'react';
import PerfumeDetail from './data/perfumesDetailedData';

class PerfumeDetails extends React.Component{
    constructor(props){
        super(props);
        let params = this.props.match.params;

        this.perfumeData = this.fetchPerfumeDetails(params.id);
    }

    fetchPerfumeDetails(perfumeId){
        return  PerfumeDetail.perfumes[0];
    }
    
    render(){
        
        return(
            <div class="container">
                <div>
                    {this.perfumeData.id}
                </div>
                <div>
                    {this.perfumeData.name}
                </div>
                <div>
                    {this.perfumeData.house}
                </div>
                <div>
                    {this.perfumeData.for}
                </div>
                <div>
                    {this.perfumeData.released}
                </div>
                <div>
                    {this.perfumeData.inProduction}
                </div>
            </div>
        );
    }
}

export default PerfumeDetails;