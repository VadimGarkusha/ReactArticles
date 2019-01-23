import React, { Component } from 'react';

export default (OriginalComponent) => class Accordion extends Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = openItemId => this.setState({openItemId});

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>;
    }
}