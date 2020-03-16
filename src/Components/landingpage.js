import React from "react"
import {Grid,Cell} from 'react-mdl';

class LandingPage extends React.Component{
    render(){
        return(
            <div style = {{width:'100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src = "https://www.shareicon.net/data/256x256/2016/09/15/829459_man_512x512.png"
                            alt = "avatar"
                            className = "avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Coder</h1>
                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | AI | Node.js | C | C++ | Java | Python</p>
                        <div className="social-links">
                            {/* linkedin */}
                            <a href = "https://www.linkedin.com/in/jyotirmay-sharma/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>

                            {/* Github */}
                            <a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                            {/* Facebook */}
                            <a href = "https://www.facebook.com/jyotir.sharma.5" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true"/>
                            </a>

                            {/* Twitter */}
                            <a href = "https://twitter.com/SharmaJyotir" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square"  aria-hidden="true"/>
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage