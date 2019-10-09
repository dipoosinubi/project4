import React, { Component, Fragment } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class NewMerchandiseForm extends React.Component {

    state = {
        description: "",
        picture: "",
        availability: true,
        price: "",
        website: "",
        team: ""
    }
    handleInput = (event) => {
        let newMerchandise = { ...this.state };
        newMerchandise[event.target.name] = event.target.value;
        this.setState(newMerchandise)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addNewMerchandise(this.state)
        window.location.reload();
    }

    addNewMerchandise = (newMerch) =>
        fetch('api/merchandise/',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMerch)
            }
        ).then(res => res.json())
    render = () => (
        <Fragment>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                <TextField
                    id="outlined-with-placeholder"
                    label="Description"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="description"
                    onChange={this.handleInput}
                    value={this.state.description}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Image URL"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="picture"
                    onChange={this.handleInput}
                    value={this.state.picture}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Enter Price"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="price"
                    onChange={this.handleInput}
                    value={this.state.price}
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="Team Website"
                    margin="normal"
                    variant="outlined"
                    type="text"
                    name="website"
                    onChange={this.handleInput}
                    value={this.state.website}
                />
            </form>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">
                    Team
                </InputLabel>
                <Select
                    native
                    // value={this.state.team}
                    onChange={this.handleInput}
                    // labelWidth={labelWidth}
                    inputProps={{
                        name: 'team',
                        // id: 'outlined-age-native-simple',
                    }}
                >
                    <option value="" />
                    <option value="1">Chelsea</option>
                    <option value="3">Machester United</option>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={this.handleSubmit}>
                Add New Merchandise
        </Button>
        </Fragment>
    )
}

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
                <div>
                    <NewMerchandiseForm addNewMerchandise={this.addNewMerchandise} />
                </div>
                <ul>
                    {this.state.merchandise.map(merchandise => (
                        <li>
                            <img
                                src={merchandise.picture}
                            /><br />
                            {merchandise.description} <br />
                            {merchandise.price} <br />
                            <Button variant="contained" href={merchandise.website} target="_blank">
                                Buy
                                </Button>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}