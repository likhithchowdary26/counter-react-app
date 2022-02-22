import React, { Component } from 'react'

class Counter extends Component {
    state={
        value: this.props.value,
        tags:['tag-1','tag-2','tag-3']
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({ value:this.state.value+=1 });
    }

    handleDecrement = (product) => {
        console.log(product)
        this.setState({ value:this.state.value-=1 });
}  

    styles={
        fontSize: 20,
        fontWeight:"Bold"
    }

    render() { 
        console.log("props",this.props)
        return (
            <div>
                {/* <h1>Hello World!!</h1> */}
                <h1 style={ this.styles } className={this.getBadges()}>{this.formatCount()}</h1>
                <button onClick={() => this.handleIncrement(this.state.value)} type ="button" className= "btn btn-success m-2">Increment</button>
                <button onClick={() => this.handleDecrement(this.state.value)} type ="button" className= "btn btn-dark">Decrement</button>
                {/* <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul> */}
            </div>
        );
    };
    
    getBadges() {
        let classes = "badge m-2 badge-";
        //classes += this.state.count === 0 ? "warning" : "primary";
        if(this.state.value===0)
            classes += "warning"
        else if(this.state.value>0)
            classes += "primary"
        else
            classes += "danger"
        return classes;
    }

    formatCount(){
        return this.state.value===0?"Zero":this.state.value;
    }   
    
}
export default Counter;