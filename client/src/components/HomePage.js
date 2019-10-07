import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

import 'bulma/css/bulma.css'

// const getMerchandiseFromServer = () =>
// fetch('/api/merchandise/').then(res => res.json())

// const objectFromListById = (teams, merchandise) =>
//   teams.reduce((obj, team) => {
//       team.merchandise = merchandise.filter(merchandise => merchandise.team === team.id);
//       obj[team.id] = team;
//       return obj;
//   }, {})

// const getTeamAndMerchandiseFromServer = () =>
// getTeamsFromServer().then(teams => 
//     getMerchandiseFromServer().then (merchandise =>
//         objectFromListById(teams, merchandise)
//         ))

class NewTeamForm extends React.Component {

    state = {
        // newTeam: {
        name: "",
        picture: "",
        website: ""
        // }
    }
    handleInput = (event) => {
        let newTeam = { ...this.state };
        newTeam[event.target.name] = event.target.value;
        this.setState(newTeam)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewTeam(this.state)
        window.location.reload();
    }

    addNewTeam = (newTeam) =>
        fetch('/api/team/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTeam)
            }
        ).then(res => res.json())


    render = () => (
        <form onSubmit={this.handleSubmit}>
            <div>
                <input
                    type="text"
                    name="name"
                    onChange={this.handleInput}
                    value={this.state.name}
                    placeholder="Enter Team Name" />
            </div>
            <div>
                <input
                    type="text"
                    name="picture"
                    onChange={this.handleInput}
                    value={this.state.picture}
                    placeholder="Enter Image URL" />
            </div>
            <div>
                <input type="text"
                    name="website"
                    onChange={this.handleInput}
                    value={this.state.website}
                    placeholder="Enter Website URL" />
            </div>
            <input type="submit" value="New Team" />
        </form>
    )
}



export default class HomePage extends React.Component {
    state = {
        currentTeam: 1,
        teams: []
    }

    componentDidMount() {
        this.getTeamsFromServer()
    }
     getTeamsFromServer = () =>{
            fetch('/api/team/')
            .then(res => res.json())
            .then(json => {
                this.setState({ teams: json })
            })
        };

    render() {
        return (
            <div class="container">
                <div>
                    <NewTeamForm addNewTeam={this.addNewTeam} />
                </div>
                <div class="notification">
                    <ul>
                        {this.state.teams.map(team => (
                            <li>
                                <Link to={`/team/${team.id}`}>
                                    {team.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}
