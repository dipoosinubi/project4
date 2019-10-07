import React, { Component } from 'react';



export default class TeamPage extends React.Component {
    state = {
        team: {},
    //  merchandise: [],
    };
    componentDidMount() {
        this.getTeamAndMerchandise()
    }

    getTeam = () => {
        fetch(`/api/team/${this.props.match.params.id}/`)
            .then(res => res.json())
    }
      getMerchandise = () => {
          fetch(`/api/merchandise/`)
          .then( res => res.json ())
      }
    
    objectFromListById = (team, merchandise) => 
    team.reduce((obj, team) => {
        team.merchandise = merchandise.filter( merchandise => merchandise.team === team.id)
        obj[team.id] = team
        return obj;
    }, {})

    getTeamAndMerchandise = () => 
      getTeam().then( team =>
        getMerchandise().then( merchandise =>
            objectFromListById(team, merchandise)
            ))
    render = () => {
        return (
            <div>
                <h1>Team Page of {this.props.match.params.id}</h1>
                Welcome to {this.state.team.name} Page
                <div>
                <ul>
                    {this.state.team.merchandise.map(merchandise => (
                        <li>
                            {merchandise.description}
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}