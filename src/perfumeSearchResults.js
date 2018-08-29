import React from 'react';

class PerfumeSearchResults extends React.Component{    
    render(){
        this.perfume = this.props.value;
        return(
            <div class="col-md-4 panel panel-default">
                <span class="row">                    
                    <span class="col-md-12">{this.perfume.perfumeName}</span>                    
                    <span class="col-md-12">{this.perfume.house}</span>
                </span>
            </div>
        );
    }
}

export default PerfumeSearchResults;