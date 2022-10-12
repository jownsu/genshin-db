const particles_config = {
    autoPlay: true,
    background: {
        // color: {
        //     value: "#000"
        // },
        position: "",
        repeat: "",
        size: "",
        opacity: .5
    },
    fullScreen: {
        enable: false,
        zIndex: 9999
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 10,
    manualParticles: [],
    particles: {
        bounce: {
            horizontal: {
                random: {
                    enable: false,
                    minimumValue: 0.1
                },
                value: 1
            },
            vertical: {
                random: {
                    enable: false,
                    minimumValue: 0.1
                },
                value: 1
            }
        },
        collisions: {
            bounce: {
                horizontal: {
                    random: {
                        enable: false,
                        minimumValue: 0.1
                    },
                    value: 1
                },
                vertical: {
                    random: {
                        enable: false,
                        minimumValue: 0.1
                    },
                    value: 1
                }
            },
            enable: true,
            mode: "bounce",
            overlap: {
                enable: true,
                retries: 0
            }
        },
        color: {
            value: "#4a57a1",
            animation: {
                h: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 20,
                    decay: 0,
                    sync: true
                },
                s: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true
                },
                l: {
                    count: 0,
                    enable: false,
                    offset: 0,
                    speed: 1,
                    decay: 0,
                    sync: true
                }
            }
        },
        groups: {
            z5000: {
                number: {
                    value: 70
                },
                zIndex: {
                    value: 50
                }
            },
            z7500: {
                number: {
                    value: 30
                },
                zIndex: {
                    value: 75
                }
            },
            z2500: {
                number: {
                    value: 50
                },
                zIndex: {
                    value: 25
                }
            },
            z1000: {
                number: {
                    value: 40
                },
                zIndex: {
                    value: 10
                }
            }
        },
        move: {
            angle: {
                offset: 0,
                value: 90
            },
            attract: {
                distance: 200,
                enable: false,
                rotate: {
                    x: 3000,
                    y: 3000
                }
            },
            center: {
                x: 50,
                y: 50,
                mode: "percent",
                radius: 0
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50
            },
            path: {
                clamp: true,
                delay: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0
                },
                enable: false,
                options: {}
            },
            outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out"
            },
            random: false,
            size: false,
            speed: .2,
            spin: {
                acceleration: 0,
                enable: false
            },
            straight: false,
            trail: {
                enable: false,
                length: 10,
                fillColor: {
                    value: "#00FF00"
                }
            },
            vibrate: false,
            warp: false
        },
        number: {
            density: {
                enable: true,
                area: 900,
                factor: 900
            },
            limit: 0,
            value: 30
        },
        opacity: {
            random: {
                enable: true,
                minimumValue: 0.3
            },
            value: {
                min: 0.3,
                max: 0.8
            },
            animation: {
                count: 0,
                enable: true,
                speed: 0.5,
                decay: 0,
                sync: false,
                destroy: "none",
                startValue: "random",
                minimumValue: 0.3
            }
        },
        reduceDuplicates: false,
        shadow: {
            blur: 5,
            color: {
                value: "#47559e"
            },
            enable: true,
            offset: {
                x: 0,
                y: 0
            }
        },
        shape: {
            options: {},
            type: "circle"
        },
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
                speed: 3,
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
        zIndex: {
            random: {
                enable: false,
                minimumValue: 0
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1
        },
        life: {
            count: 0,
            delay: {
                random: {
                    enable: false,
                    minimumValue: 0
                },
                value: 0,
                sync: false
            },
            duration: {
                random: {
                    enable: false,
                    minimumValue: 0.0001
                },
                value: 0,
                sync: false
            }
        },
        rotate: {
            random: {
                enable: false,
                minimumValue: 0
            },
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
            },
            direction: "clockwise",
            path: false
        },
        destroy: {
            bounds: {},
            mode: "none",
            split: {
                count: 1,
                factor: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 3
                },
                rate: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: {
                        min: 4,
                        max: 9
                    }
                },
                sizeOffset: true,
                particles: {}
            }
        },
        roll: {
            darken: {
                enable: false,
                value: 0
            },
            enable: false,
            enlighten: {
                enable: false,
                value: 0
            },
            mode: "vertical",
            speed: 25
        },
        tilt: {
            random: {
                enable: false,
                minimumValue: 0
            },
            value: 0,
            animation: {
                enable: false,
                speed: 0,
                decay: 0,
                sync: false
            },
            direction: "clockwise",
            enable: false
        },
        twinkle: {
            lines: {
                enable: false,
                frequency: 0.05,
                opacity: 1
            },
            particles: {
                enable: false,
                frequency: 0.05,
                opacity: 1
            }
        },
        wobble: {
            distance: 5,
            enable: false,
            speed: {
                angle: 50,
                move: 10
            }
        },
        orbit: {
            animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                sync: false
            },
            enable: false,
            opacity: 1,
            rotation: {
                random: {
                    enable: false,
                    minimumValue: 0
                },
                value: 45
            },
            width: 1
        },
        links: {
            blink: true,
            color: {
                value: "#3a4687"
            },
            consent: false,
            distance: 135,
            enable: true,
            frequency: 1,
            opacity: 0.35000000000000003,
            shadow: {
                blur: 15,
                color: {
                    value: "#43519c"
                },
                enable: true
            },
            triangles: {
                enable: false,
                frequency: 1
            },
            width: 3,
            warp: false
        },
        repulse: {
            random: {
                enable: false,
                minimumValue: 0
            },
            value: 0,
            enabled: false,
            distance: 1,
            duration: 1,
            factor: 1,
            speed: 1
        }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: true,
    style: {},
    themes: [],
    zLayers: 100,
    emitters: []
}

export default particles_config;