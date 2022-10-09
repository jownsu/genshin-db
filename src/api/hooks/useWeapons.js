import React, { useState } from 'react'
import JSONWeapons from '../../assets/data/weapons.json'

function useWeapons() {
    const [weapons, setWeapons] = useState(JSONWeapons);

    const filterWeapon = (search) => {
        setWeapons(JSONWeapons.filter(item => {

            if (
                item.name.toLowerCase().match(search.search.toLowerCase()) && 
                filterMatch(search.type, item.type)
                ) {
                return true
            }

            return false;
        }))
    }

    const getWeapon = (name) => {
        let data = JSONWeapons.find(item => item.name == name);
        return data;
    }

    const filterMatch = (input, data) => {
        if(input == ''){
            return true;
        }

        if(input == data){
            return true;
        }

        return false;
    }

    return {
        weapons,
        getWeapon,
        filterWeapon    
    }

}

export default useWeapons