import React, { useState, useEffect, useRef } from 'react'
import Search from '../components/Search';
import TeamList from '../components/Teams/TeamList';
import useTeams from '../api/hooks/useTeams';

function Teams() {
    const [search, setSearch] = useState('');

    const { teams, filterTeams } = useTeams();

    const didMount = useRef(false);

    useEffect(() => {
        if (!didMount.current) {
            didMount.current = true;
            return;
        }
        filterTeams(search)
    }, [search])
    

    return (
        <div className="container">
            <div className="teams">
                <div className="header-box">
                    <h1>Genshin Impact Suggested Team List</h1>
                    <Search 
                        onChange={(val) => {
                            setSearch(val);
                        }}
                    />
                </div>

                <div className="teams__main">
                    <TeamList 
                        tier={1}
                        teams={teams.filter(item => item.tier == 1)}
                    />

                    <TeamList 
                        tier={2}
                        teams={teams.filter(item => item.tier == 2)}
                    />
                </div>

            </div>
        </div>
    )
}

export default Teams;