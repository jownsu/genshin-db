import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import particles_config from '../configs/particles'
import { loadFull } from "tsparticles";

function Particle() {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);


    
  return (
    <Particles id="tsparticles" init={particlesInit} options={particles_config} />
  )
}

export default Particle