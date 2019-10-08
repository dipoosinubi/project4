import React, { Component } from 'react';


export default class TeamPage extends React.Component {
    state = {
        team: {
            merchandise: [],
            schedule: []

        },
    };
    componentDidMount() {
       this.getTeam()
        
    }

    getTeam = () => {
        fetch(`/api/team/${this.props.match.params.id}/`)
            .then(res => res.json())
            .then(json => {
                this.setState ({ team : json })
            })
    }
  
    render = () => {
        return (
            <div>
                <h1>Team Page of {this.props.match.params.id}</h1>
                Welcome to {this.state.team.name} Page
                <hr/>
                <div>
                    <ul>
                        {this.state.team.merchandise.map(merchandise => (
                            <li>
                                {merchandise.description} <br/>
                            <a href={merchandise.website} target="_blank" >Buy</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div>
                    <ul>
                        {this.state.team.schedule.map(schedule => (
                            <li>
                              Opponent: {schedule.name}<br/>
                              Date: {schedule.date}<br/>
                              Time: {schedule.time}<br/>
                              Location: {schedule.location}<br/>
                            <a href={schedule.website} target="_blank" >Buy Tickets</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}