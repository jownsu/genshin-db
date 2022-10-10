import React from 'react'
import TeamCard from './TeamCard';

const TIER = {
    1: 'Top Teams',
    2: 'Other Teams'
}

function TeamList(props) {
    const { tier, teams = [] } = props;
    return (
        <div className='team_list'>
            <div className="heading-4">{TIER[tier]}</div>
            <div className="team_list__main">
                {
                    teams.map(item => <TeamCard key={item.id} characters={item.characters} />)
                }
            </div>

        </div>
    )
}

export default TeamList