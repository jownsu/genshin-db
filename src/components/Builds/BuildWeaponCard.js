import React, { useState, useEffect } from 'react'
import useWeapons from '../../api/hooks/useWeapons';
import { WEAPONS_ICON_URL } from '../../configs/constants';
import Icon from '../Icon';

function BuildWeaponCard({name, theme}) {
    const [weapon, setWeapon] = useState({})
    const { getWeapon } = useWeapons();
    useEffect(() => {
        setWeapon(getWeapon(name))
    }, [])
    

    return (
        <div className="build_card">
            <div className="build_card__header">
                <Icon 
                    url={WEAPONS_ICON_URL}
                    name={name}
                    rarity={weapon.rarity}
                />
                <div>
                    <p className={'heading-3 ' + theme}>{weapon.name}</p>
                    <p className='fs-sm'>{weapon.secondary}</p>
                </div>
            </div>

            <div className="build_card__main">
                <p className='build_card__description' dangerouslySetInnerHTML={{__html: weapon.bonus}}></p>
            </div>
        </div>
    )
}

export default BuildWeaponCard