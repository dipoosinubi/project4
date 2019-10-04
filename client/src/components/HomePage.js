import React, { Component } from 'react';
import App from '../App';

const merchandisePreview = (merchandise) => (
    <li>
     {merchandise.id} - {merchandise.description}
    </li>
)

const merchandiseList =(merchandise) => (
    <ul>
       {merchandise.map(merchandisePreview)}
    </ul>
)
const teamMerchandiseList = (team) => (
    <div>
        {team.name}
        {merchandiseList(team.merchanise)}
    </div>
)

const getTeamsFromServer = () => 
fetch('/api/team/').then(res => res.json())

const getMerchandiseFromServer = () =>
fetch('/api/merchandise/').then(res => res.json())


class HomePage extends React.Component{

    state={
        currentTeam: 1,
        teams:''
    }
    render(){
        return(
            <div>
                {teamMerchandiseList()}
            </div>
        )
    }
}
export default HomePage;