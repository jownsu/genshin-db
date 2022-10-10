import React from 'react'
import BuildItem from './BuildItem';
import { COLORS } from '../../configs/constants';

function Builds(props) {
    const { 
        id,
        name = '',
        data = [],
        theme
    } = props;


    return (
        <div className="builds" id={id}>
            <div className="heading-4">{"Best " + name + " Builds"}</div>
            <div className="builds__main">
                {data.map((item, index) => (
                    <BuildItem 
                        key={index}
                        data={item}
                        name={name}
                        theme={COLORS[theme]}
                    />
                ))}
            </div>
        </div>
    )
}

export default Builds