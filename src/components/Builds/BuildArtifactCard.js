import React, { useEffect, useState } from 'react'
import useArtifacts from '../../api/hooks/useArtifacts';
import { ARTIFACTS_ICON_URL } from '../../configs/constants';
import Icon from '../Icon';

function BuildArtifactCard({name, stats = [], theme}) {

    const [artifact, setArtifact] = useState({bonus: []});
    const { getArtifact } = useArtifacts();

    useEffect(() => {
        setArtifact(getArtifact(name));
    }, [])

    return (
        <div className="build_card">
            <div className="build_card__header">
                <Icon 
                    url={ARTIFACTS_ICON_URL}
                    name={name}
                    rarity={artifact.rarity}
                />
                <div>
                    <p className={'heading-3 ' + theme}>{artifact.name}</p>
                    <p className='fs-sm'>{stats.join(' / ')}</p>
                </div>
            </div>

            <div className="build_card__main">
                {
                    artifact.bonus.map((item, index) => (
                        <p key={index} className='build_card__bonus'><span>({item.count})</span> {item.value}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default BuildArtifactCard