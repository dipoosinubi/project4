import React, { Component } from 'react';
import TeamPage from './TeamPage';


export default class ScheduleList extends React.Component {
    state = {
        teams: []
    }
    componentDidMount() {
        this.getScheduleFromServer()
    }

    getScheduleFromServer = () => {
        fetch('/api/team/')
            .then(res => res.json())
            .then(json => {
                this.setState({ teams: json })
                return json
            })
            .then((v) => {
                console.log(v)
            })
    }

    scheduleComponent = (teamName, teamSchedule) => {
        return teamSchedule.map((v) => {
                 return (<li>{teamName}   vs {v.name} <br/> {v.location} <br/>
                 <a href={v.website} target="_blank" >Buy Tickets</a>
                   <hr/> </li>)
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.teams.map(team => (
                        this.scheduleComponent(team.name, team.schedule)
                    ))}
                  
                </ul>
            </div>
        )
    }
}