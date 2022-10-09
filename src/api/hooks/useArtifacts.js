import React, { useState } from 'react'
import JSONArtifacts from '../../assets/data/artifacts.json'

function useArtifacts() {
    const [artifacts, setArtifacts] = useState(JSONArtifacts);

    const filterArtifacts = (search) => {
        setArtifacts(JSONArtifacts.filter(item => {

            if (
                item.name.toLowerCase().match(search.search.toLowerCase()) && 
                filterMatch(search.type, item.type)
                ) {
                return true
            }

            return false;
        }))
    }

    const getArtifact = (name) => {
        let data = JSONArtifacts.find(item => item.name == name);
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
        artifacts,
        getArtifact,
        filterArtifacts    
    }

}

export default useArtifacts