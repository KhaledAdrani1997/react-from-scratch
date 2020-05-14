
import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(),active:true};

        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
        
    }

     

    handleClick(message) {
        console.log('clicked ',message)
    this.setState(state => ({
      active: !state.active
    }));
    }

    componentDidMount(){
        this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    }

    tick = ()=>{
        this.setState({
      date: new Date()
    });
    }

    
    

    render() {
        const message = "It it it it bom";
        let element = <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        //the best way is to make another componenet called Clock Element and import it instead
        //need to be modified
        return (
            <div>
                <p>{this.state.active ? element : null}</p>
                <button className="toggle-btn" 
                style={{margin:"5px",backgroundColor:"gray"}} 
                onClick={this.handleClick.bind(this,message)}>
                    Toggle {this.state.active ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}


