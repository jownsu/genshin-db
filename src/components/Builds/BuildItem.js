import React from 'react'
import BuildWeaponCard from './BuildWeaponCard';
import BuildArtifactCard from './BuildArtifactCard';

function BuildItem(props) {
    const {
        data = {},
        name = '',
        theme = ''
    } = props;

    return (
        <div className="build_item">
            <p className={"heading-4 " + theme}>{data.name}</p>
            <p className="build_item__description">{data.description}</p>
            {
                data.er && 
                <p className="build_item__er">
                    Suggested Energy Recharge: 
                    <span className="fw-bold"> {data.er}%</span>
                </p>
            }

            <p className={"heading-4 " + theme}>Best {name} Weapons</p>
            <div className="build_item__cards">
                <div>
                    <p className='mb-1'>Best</p>
                    <BuildWeaponCard name={data.weapon_1} theme={theme} />
                </div>
                <div>
                    <p className='mb-1'>Optional</p>
                    <BuildWeaponCard name={data.weapon_2} theme={theme} />  
                </div>
            </div>

            <p className={"heading-4 " + theme}>Best {name} Artifacts</p>
            <div className="build_item__cards">
                <div>
                    <p className='mb-1'>Best</p>
                    <BuildArtifactCard 
                        name={data.set_1} 
                        theme={theme} 
                        stats={data.stats}    
                    />
                </div>
  
                <div>
                    {
                        data.set2_1 && 
                        <>
                            <p className='mb-1'>Optional</p>
                            <BuildArtifactCard 
                                name={data.set2_1} 
                                theme={theme} 
                                stats={data.stats}
                            />
                            {
                                data.set2_2 && 
                                <BuildArtifactCard 
                                    name={data.set2_2} 
                                    theme={theme} 
                                    stats={data.stats}
                                />
                            }
                        </>
                    }
   
                </div>

            </div>
        </div>
    )
}

export default BuildItem