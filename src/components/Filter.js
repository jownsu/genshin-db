import React, { useState } from 'react'
import { ELEMENTS, WEAPONS } from '../configs/constants'

function Filter({onVisionChange = () => {}, onWeaponChange = () => {}}) {
    const [vision, setVision] = useState('');
    const [weapon, setWeapon] = useState('');    

    const handleVisionClick = (val) => {
        if(val == vision){
            setVision('', onVisionChange(''));
        }else{
            setVision(val, onVisionChange(val));
        }
    }

    const handleWeaponClick = (val) => {
        if(val == weapon){
            setWeapon('', onWeaponChange(''));
        }else{
            setWeapon(val, onWeaponChange(val));
        }
    }

    return (
        <div className="filter">
            <div className="filter__vision">
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Anemo' && 'active')} 
                    onClick={() => handleVisionClick('Anemo')}
                >
                    <span>Anemo</span>
                    <img 
                        src={ELEMENTS['Anemo']} 
                        alt="anemo" 
                    />
                </div>
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Cryo' && 'active')} 
                    onClick={() => handleVisionClick('Cryo')}
                >
                    <span>Cryo</span>
                    <img 
                        src={ELEMENTS['Cryo']} 
                        alt="cryo" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Electro' && 'active')} 
                    onClick={() => handleVisionClick('Electro')}    
                >
                    <span>Electro</span>
                    <img 
                        src={ELEMENTS['Electro']} 
                        alt="electro" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Dendro' && 'active')} 
                    onClick={() => handleVisionClick('Dendro')}    
                >
                    <span>Dendro</span>
                    <img 
                        src={ELEMENTS['Dendro']} 
                        alt="dendro" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Geo' && 'active')} 
                    onClick={() => handleVisionClick('Geo')}
                >
                    <span>Geo</span>
                    <img 
                        src={ELEMENTS['Geo']} 
                        alt="geo" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Hydro' && 'active')} 
                    onClick={() => handleVisionClick('Hydro')}
                >
                    <span>Hydro</span>
                    <img 
                        src={ELEMENTS['Hydro']} 
                        alt="hydro" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (vision == 'Pyro' && 'active')} 
                    onClick={() => handleVisionClick('Pyro')}    
                >
                    <span>Pyro</span>
                    <img 
                        src={ELEMENTS['Pyro']} 
                        alt="pyro" 
                    /> 
                </div>

            </div>

            <div className="filter__weapon">
                <div 
                    className={'tooltip filter__icon ' + (weapon == 'Bow' && 'active')} 
                    onClick={() => handleWeaponClick('Bow')}    
                >
                    <span>Bow</span>
                    <img 
                        src={WEAPONS['Bow']} 
                        alt="bow" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (weapon == 'Catalyst' && 'active')} 
                    onClick={() => handleWeaponClick('Catalyst')}        
                >
                    <span>Catalyst</span>
                    <img 
                        src={WEAPONS['Catalyst']} 
                        alt="catalyst" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (weapon == 'Claymore' && 'active')} 
                    onClick={() => handleWeaponClick('Claymore')}        
                >
                    <span>Claymore</span>
                    <img 
                        src={WEAPONS['Claymore']} 
                        alt="claymore" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (weapon == 'Polearm' && 'active')} 
                    onClick={() => handleWeaponClick('Polearm')}    
                >
                    <span>Polearm</span>
                    <img 
                        src={WEAPONS['Polearm']} 
                        alt="polearm" 
                    /> 
                </div>
                <div 
                    className={'tooltip filter__icon ' + (weapon == 'Sword' && 'active')} 
                    onClick={() => handleWeaponClick('Sword')}    
                >
                    <span>Sword</span>
                    <img 
                        src={WEAPONS['Sword']} 
                        alt="sword" 
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Filter