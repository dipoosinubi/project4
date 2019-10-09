import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import './App.css';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

import 'bulma/css/bulma.css'

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
        // <form onSubmit={this.handleSubmit}>
        //     <div>
        //         <input
        //             type="text"
        //             name="name"
        //             onChange={this.handleInput}
        //             value={this.state.name}
        //             placeholder="Enter Team Name" />
        //     </div>
        //     <div>
        //         <input
        //             type="text"
        //             name="picture"
        //             onChange={this.handleInput}
        //             value={this.state.picture}
        //             placeholder="Enter Image URL" />
        //     </div>
        //     <div>
        //         <input type="text"
        //             name="website"
        //             onChange={this.handleInput}
        //             value={this.state.website}
        //             placeholder="Enter Website URL" />
        //     </div>
        //     <input type="submit" value="New Team" />
        // </form>
        <form noValidate autoComplete="off">
        <TextField
        id="outlined-with-placeholder"
        label="Team Name"
        margin="normal"
        variant="outlined"
        type="text"
        name="name"
        onChange={this.handleInput}
        value={this.state.name}
      />
       <TextField
        id="outlined-with-placeholder"
        label="Team Logo"
        margin="normal"
        variant="outlined"
        type="text"
        name="picture"
        onChange={this.handleInput}
        value={this.state.picture}
      />
      <TextField
        id="outlined-with-placeholder"
        label="Team Website"
        margin="normal"
        variant="outlined"
        type="text"
        name="website"
        onChange={this.handleInput}
        value={this.state.picture}
      />
      {/* <Fab  className="button" variant="extended" aria-label="delete" >
        <NavigationIcon  />
        Extended
      </Fab> */}
       <Button variant="contained">
        Default
      </Button>
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
            <div>
                <h1>SUPES FOOTY </h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br/>
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<hr/>
                <NewTeamForm addNewTeam={this.addNewTeam} />
                <div className="teamList">
                    {this.state.teams.map(team => (
                        <Card className="teamCard" key={team.id}>
                            <CardActionArea>
                                <Link to={`/team/${team.id}`} >
                                    <CardMedia
                                        className="cardImg"
                                        // component="img"
                                        alt={team.name}
                                        image={team.picture}
                                        title={team.name}
                                        className="Team Picture"
                                    />
                                    <CardContent className="card-content">
                                        <Typography gutterBottom variant="h6" component="p">
                                            {team.name}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary" component="p">
                                            Click Here For Team Merchandise and Schedule
                                    </Typography>
                                    </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}
