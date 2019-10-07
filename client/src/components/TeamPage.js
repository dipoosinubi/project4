import React, { Component } from 'react';



export default class TeamPage extends React.Component {
    state = {
        team: {},
        merchandise: [],
    };
    componentDidMount() {
        this.getMerchanandiseByTeamId()
    }

    getMerchanandiseByTeamId = () => {
        fetch(`/api/merchandise/${this.props.match.params.team}/`)
            .then(res => res.json())
            .then(merchandise => {
                this.setState({ merchandise });
            });
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.team !== this.props.match.params.team) {
            this.getMerchanandiseByTeamId();
        }

    }

    render = () => {
        return (
            <div>
                <h1>Team Page of {this.props.match.params.id}</h1>
                <ul>
                    {this.state.merchandise.map(merchandise => (
                        <li>
                            {merchandise.description}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}