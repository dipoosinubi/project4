import React, { Component } from 'react';
import App from '../App';

const getTeamsFromServer = () =>
fetch('/api/team/').then(res => res.json())


export default class HomePage extends React.Component {

    state = {
        currentTeam: 1,
        teams: []
    }

    componentDidMount = () => {
       getTeamsFromServer().
       then(teams => {
           this.setState({ teams })
       })
    }

    render() {
        return (
            <div>
                <ul>
                {this.state.teams.map (team => (
                    <li>
                        {team.name}
                    </li>

                ))}
                </ul>
            </div>
        )
    }
}
