import React, { Component } from 'react';

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent name='Ian' />
        }
    }
    return NewComponent
}

export default UpdatedComponent