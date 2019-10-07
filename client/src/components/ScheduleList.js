import React, { Component } from 'react';


export default class ScheduleList extends React.Component {
    state = {
        schedule: []
    }
    componentDidMount() {
      this.getMerchandiseFromServer()
    }

    getMerchandiseFromServer = () => {
        fetch('/api/schedule/')
        .then(res => res.json())
        .then(json => {
            this.setState({ schedule: json })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.schedule.map(schedule => (
                        <li>
                  {schedule.name} - {schedule.location}
                        </li>
                    ) )}
                </ul>
            </div>
        )
    }
}