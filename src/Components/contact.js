import React from "react"
import {Grid , Cell, List, ListItem, ListItemContent} from "react-mdl"

class Contact extends React.Component{

    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jyotirmay Sharma</h2>
                        <img
                            src = "https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/23467250_10212531809064430_618481492915884626_o.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=i8Tu4_TXePoAX-E3yaI&_nc_ht=scontent-lax3-1.xx&oh=4b0846cb05b525c995e969e656790f90&oe=5E925291"
                            alt = "profile-pic"
                            style = {{height:'250px',radius:'12px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                        I am a Computer Science graduate student at University of Southern California. I love coding, Web, App development and soccer.
                        Love coding and soccer as much as I do? Let's discuss about some new ideas and about soccer.
                        </p><br/>
                        <p style ={{color:'gray'}}><span style ={{color:'black'}}>Web Development:</span> I started Web Development in 2016. I have done an internship in web development at ABGO Designs. I have made several projects related to web development. I am constantly learning new web technologies.</p>
                        <p style ={{color:'gray'}}><span style ={{color:'black'}}>Operating Systems:</span> I have strong experience of  coding in C and C++. I ave implemented Token Bukcet Emulator, Bank Balance System and Weenix Operating System using C.</p>
                        <p style ={{color:'gray'}}><span style ={{color:'black'}}>Artificial Intelligence:</span> I have implemented several projects in AI like First Order Logic solving agent, Game playing agent (Halma) and Search stratergies like (A*), all using Python.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div class = "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    2132459371
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    2132459371
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    jsharma@usc.edu
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    live:.cid.8eaa3a55e70ed0d5
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact