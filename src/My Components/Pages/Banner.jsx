import React from 'react'
import '../Styles/Banner.css'
const Banner = () => {
    return (
        <section className="banner">
            <div className="vid-and-text-container">
                <div className="vid-container">
                    <div className="vid-header">
                        <div className="threedots">
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                        <div className="center"><p>theaterimdepot.de</p></div>
                    </div>
                    <div className="video-wrapper">
                        <video autoPlay loop muted src="https://player.vimeo.com/progressive_redirect/playback/1058146644/rendition/720p/file.mp4?loc=external&oauth2_token_id=1150485861&signature=88828ea1f31ffcd3a14c11d7030023e1424e7df65ff148dd58c95ef2c8710fed&user_id=73854073"></video>
                    </div>
                </div>

                <div className="text-container">
                    <h5>19 Feb 2025</h5>
                    <p className="paraP" >theaterimdepot.de</p>
                    <p>An interesting take on staging for the landing page of the Theater im Depot,
                        with the website presenting a window to the content inside a larger menu setting. by</p>
                    <h5 className="bottom-text"><span>Credits → </span>
                        <span>Liebermann Kiepe Reddemann</span>
                        <span> & Ten Ten Team</span>
                    </h5>
                </div>
            </div>
        </section>
    )
}

export default Banner
