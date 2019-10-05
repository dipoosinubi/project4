import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import App from '../App';

import 'bulma/css/bulma.css'

const getTeamsFromServer = () =>
    fetch('/api/team/').then(res => res.json())

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
        <form>
            <div>
                <input type="text" name="name" onChange={this.handleInput} value={this.state.name} placeholder="Enter Team Name" />
            </div>
            <div>
                <input type="text" name="picture" onChange={this.handleInput} value={this.state.picture} placeholder="Enter Image URL" />
            </div>
            <div>
                <input type="text" name="website" onChange={this.handleInput} value={this.state.website} placeholder="Enter Website URL" />
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

    componentDidMount = () => {
        getTeamsFromServer().
            then(teams => {
                this.setState({ teams })
            })
    }


    render() {
        return (
            <div class="container">
                <div>
                    <NewTeamForm  addNewTeam={this.addNewTeam}/>
                </div>
                <div class="notification">
                    <ul>
                        {this.state.teams.map(team => (
                            <li>
                                <Link>
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
