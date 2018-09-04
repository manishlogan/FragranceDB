import React from 'react';

class SuggestPerfumes extends React.Component{


    render(){
        this.state = {};
        return(
            <div class="panel panel-default">

                <span class="row">
                    <label class="col-md-6">Name of the perfume</label>
                    <input type="text" value={this.state.perfumeName} class="col-md-6"/>
                </span>
                <span class="row">
                    <label class="col-md-6">Name of the House</label>
                    <input type="text" value={this.state.perfumeHouse} class="col-md-6"/>
                </span>
                <span class="row">
                    <label class="col-md-6">Link for reference</label>
                    <input type="text" value={this.state.link} class="col-md-6"/>
                </span>

                <button class="btn-primary float-right">Submit Suggestion</button>
            </div>
        );
    }
}

export default SuggestPerfumes;