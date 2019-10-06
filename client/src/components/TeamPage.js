import React, { Component } from 'react';




export default class TeamPage extends React.Component {
    render () {
        return (
            <div>
                <h1>Team Page of id: {this.props.match.params.id}</h1>
              <p>This will contain both merchandise and Schedule</p>
            </div>
        )
    }
}