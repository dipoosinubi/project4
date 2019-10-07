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
        fetch(`/api/merchandise/${this.props.match.params.id}/`)
            .then(res => res.json())
            .then(merchandise => {
                this.setState({ merchandise });
            });
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getMerchanandiseByTeamId();
        }

    }

    render = () => {
        return (
            <div>
                <h1>Team Page of {this.props.match.params.id}</h1>
                <ul>
                    <React.Fragment>
                        <li>
                            {this.state.merchandise.description}
                        </li>
                    </React.Fragment>
                </ul>
            </div>
        )
    }
}