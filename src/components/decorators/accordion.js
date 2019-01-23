import React, {Component} from 'react';

export default (OriginalComponent) => class Accordion extends Component {
    render(){
        return <OriginalComponent/>;
    }
}