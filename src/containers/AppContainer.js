import React from 'react';
import {SocialIcon} from 'react-social-icons';


const AppContainer = () => {
    return(
        <>
        <div className = "container">
        <h1 className = "title">V A S A</h1>
        <a className = "link" href= "https://vasa.bandcamp.com" target ="blank">BUY HEROICS ON VINYL/CD</a>
        <a className = "link" href = "https://vasa.bandcamp.com/merch" target ="blank">BUY MERCH</a>
        <div className = "spotify">
        <iframe src="https://open.spotify.com/embed/album/4cA77X4YjmJUvKTOZezXYF" width="500" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
            <div className = "social-container">
                <SocialIcon url ="https://www.facebook.com/vasaband" target ="blank" network = "facebook" bgColor = "gold"className ="icon" style={{height:100, width:100}}/>
                <SocialIcon url = "https://twitter.com/vasaband" target ="blank" network = "twitter" bgColor = "gold" className ="icon" style={{height:100, width:100}}/>
                 <SocialIcon url = "https://instagram.com/vasaband" target ="blank" network = "instagram" bgColor = "gold" className ="icon" style={{height:100, width:100}}/>
            </div>
        
        </div>
        </>
    )
}

export default AppContainer;