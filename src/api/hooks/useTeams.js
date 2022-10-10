import React, { useState } from 'react'
import JSONTeams from '../../assets/data/teams.json'

function useTeams() {
    const [teams, setTeams] = useState(JSONTeams)

    const filterTeams = (search) => {
        setTeams(JSONTeams.filter(item => {
            let chars = item.characters.join('').toLowerCase()

            if (chars.match(search.toLowerCase())) {
                return true
            }
            return false;
        }))
    }

    return {
        teams,
        filterTeams    
    }

}

export default useTeams;