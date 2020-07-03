import React from 'react';

class Flexi extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.stateObj; //Getting state from parent component
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitFormData = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state); //Calling parent function with state object(form data)

    }

    render() {
        const { person_name, states } = this.state;
        return <React.Fragment>
            <h1>Form</h1>
            <form onSubmit={this.submitFormData}>
                {this.props.config.items.map(item => {
                    return (
                    <div key={item.name}>
                        <label>{item.label}
                            {item.values ?
                                <select
                                    name={item.name}
                                    value={states}
                                    onChange={this.onChange} >
                                    {item.values.map(value => {
                                        return <option key={value} value={value}>{value}</option>
                                    }
                                    )}

                                </select>
                                : <input 
                                type={item.type} 
                                name={item.name}
                                value={person_name}
                                onChange={this.onChange}
                                 />}
                        </label>
                    </div>
                    );
                })}
                <input
                    type='submit'
                    className='btn btn-primary'
                    value='Submit' />
            </form>
        </React.Fragment>
    }
}
export default Flexi;