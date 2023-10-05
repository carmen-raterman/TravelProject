import React from 'react'

function Hero() {
    return (
        <div className='hero-container'>
            <video
                src="/public/video-1.mp4"
                autoPlay
                loop
                muted
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    position: 'fixed',
                    zIndex: -1
                }}
            />

            <h1 style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontSize: '4rem',
                    textAlign: 'center',
                    maxWidth: '80%'
                }} > 
                DARE TO DISCOVER ADVENTURE
            </h1>

        </div>
    )
}

export default Hero;