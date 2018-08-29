import React from 'react';
import PerfumesData from './data/perfumesData';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.perfumeCount = PerfumesData.perfumes.length;
    }

    render(){
        return(
            <div>
                <span class="row">
                    <span class="col-md-8">
                    </span>
                    <span class="col-md-4 panel panel-default">
                        Fragrance DB
                        Perfumes: {this.perfumeCount}
                    </span>
                    
                </span>
            </div>
        );
    }
}

export default Home;