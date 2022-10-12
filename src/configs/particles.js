const particles_config = {
    fpsLimit: 60,
    fullScreen: {
        enable: false,
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: { enable: true, mode: 'push' },
        // onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: { particles_nb: 4 },
        // repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
        color: { value: '#4a57a1' },
        reduceDuplicates: true,
        links: { 
        // shadow: {
        //     blur: 10,
        //     color: {
        //         value: "#43519c"
        //     },
        //     enable: true
        // },
        blink: true,
        color: '#3a4687', 
        distance: 135, 
        enable: true, 
        width: 3,
        frequency: 1,
        opacity: 0.45000000000000003,
        warp: false
        },
        move: {
        bounce: false,
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 1,
        straight: false,
        },
        number: { 
            density: { 
                enable: true, 
                area: 900, 
                factor: 900 
            }, 
            value: 60 
        },
        opacity: {
            random: {
                enable: true,
                minimumValue: 0.3
            },
            value: {
                min: 0.3,
                max: .8
            },
            animation: {
                count: 0,
                enable: false,
                speed: 5,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0.3
            }
        },
        shape: { type: 'circle' },
        size: {
        random: {
            enable: true,
            minimumValue: 1
        },
        value: {
            min: 1,
            max: 3
        },
        animation: {
            count: 0,
            enable: true,
            speed: 15,
            decay: 0,
            sync: false,
            destroy: "none",
            startValue: "random",
            minimumValue: 1
        }
        },
        stroke: {
            width: 1
        },
    },
    detectRetina: true,
  };

export default particles_config;