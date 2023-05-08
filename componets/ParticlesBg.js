import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "../config/particles-config";

const ParticlesBg = () => {
    
    const particlesInit = useCallback(async engine => {
        
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
       ;
    }, []);

    return (
            <div id='particle-background'>
                <Particles
                id="tsparticles"
                particlesLoaded='particlesLoaded'
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticlesConfig}
                height='100vh'
                width="100vw"
                >

                </Particles>
            </div>
        )

}
export default ParticlesBg