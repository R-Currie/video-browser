import React from 'react';

class Searchbar extends React.Component{
    state = {term: ""};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault();

        //Callback from parent component
        this.props.onTermSubmit(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} onChange={this.onInputChange} type="text" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchbar;