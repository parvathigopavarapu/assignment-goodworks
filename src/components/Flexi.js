import React from 'react';

class Flexi extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.stateObj; //getting state from parent component
    }
    onChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    render(){
        const {person_name, states} = this.state;
        return <React.Fragment>
            <h1>Form</h1>
            <form>
                {this.props.config.items.map(item =>{
                    return <div>
                        <label>{item.label}
                        {item.values ?
                        <select
                         name= {item.name}
                         value={states}
                         onChange={this.onChange} >
                             {item.values.map(value =>{
                                 return <option key={value} value={value}>{value}</option>
                             }
                             )}

                         </select>
                        : <input type={item.type} name={item.name} value={person_name}
                    onChange={this.onChange} />}
                            </label> 
                    </div>
                })}
            </form>
        </React.Fragment>
    }
}
export default Flexi;