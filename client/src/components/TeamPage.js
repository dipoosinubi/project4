import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";


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
                this.setState({ team: json })
            })
    }

    render = () => {
        return (
            <div>
                {/* <h1>Team Page of {this.props.match.params.id}</h1> */}
                Welcome to {this.state.team.name} Page<br />

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<hr />

                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper >
                                <ul>
                                    {this.state.team.merchandise.map(merchandise => (
                                        <li>
                                            <img src={merchandise.picture} /> <br />
                                            {merchandise.description} <br />
                                            {merchandise.price} <br />
                                            <Button variant="contained" href={merchandise.website} target="_blank">
                                                Buy
        </Button> <hr />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                                <ul>
                                    {this.state.team.schedule.map(schedule => (
                                        <li>
                                            Opponent: {schedule.name}<br />
                                            Date: {schedule.date}<br />
                                            Time: {schedule.time}<br />
                                            Location: {schedule.location}<br />
                                            <Button variant="contained" href={schedule.website} target="_blank">
                                                Buy Tickets
                                             </Button> <hr />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}