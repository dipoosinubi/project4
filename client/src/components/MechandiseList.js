import React, { Component } from 'react';
import Button from "@material-ui/core/Button";



export default class MerchandiseList extends React.Component {
    state = {
        merchandise: []
    }
    componentDidMount() {
      this.getMerchandiseFromServer()
    }

    getMerchandiseFromServer = () => {
        fetch('/api/merchandise/')
        .then(res => res.json())
        .then(json => {
            this.setState({ merchandise: json })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.merchandise.map(merchandise => (
                        <li>
                           <img 
                            src={merchandise.picture} 
                            /><br/>
                            {merchandise.description} <br/>
                            <Button variant="contained" href={merchandise.website} target="_blank">
            Buy
        </Button>
                            {/* <a href={merchandise.website} target="_blank" >Buy</a> */}
                            <hr/>
                        </li>
                    ) )}
                </ul>
            </div>
        )
    }
}