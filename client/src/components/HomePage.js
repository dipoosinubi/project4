import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';
// import './App.css';

class NewTeamForm extends React.Component {

    state = {
        name: "",
        picture: "",
        website: ""
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
    getTeamsFromServer = () => {
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
                    {this.state.teams.map(team => (
                        <div class="card">
                            <Link to={`/team/${team.id}`}>
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={team.picture} alt={team.name}/>
                                    </figure>
                                </div>
                                <div class="content">
                                   {team.name}
                                 </div>
                        </Link>
                            </div>
                    ))}
                </div>
            </div >
        )
    }
}
