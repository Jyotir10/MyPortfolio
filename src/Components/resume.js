import React from "react"
import {Grid, Cell} from "react-mdl"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

class Resume extends React.Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXJN7WURF9P0RgiLZSxM92ik38lxYSCgpgv3pgtJQYLCkMYmg&s"
                            alt="avatar"
                            style = {{}}
                        />
                    </div>
                    <h2 style = {{paddingTop:'2em'}}>Jyotirmay Sharma</h2>
                    <h4 style = {{color:'gray'}}>Programmer</h4>
                    {/* <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}></hr>
                    <p></p> */}
                    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}></hr>
                    <h5>Contact Number</h5>
                    <p>2132459371</p>
                    <h5>E-Mail</h5>
                    <p>jsharma@usc.edu</p>
                    <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}></hr>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <Education startDate="2013"
                        endDate="2017"
                        univName = "Gurugobing Singh Indraprastha University"
                        schoolDesc = "B.Tech. Electronics and Communication Engineering, 83%"
                    />

                    <Education startDate="2018"
                        endDate="2020"
                        univName = "University of Southern California"
                        schoolDesc = "MS in Computer Science, 3.76"
                    />

                    <hr style={{borderTop:'3px solid #e22947'}}></hr>

                    <h2>Experience</h2>

                    <Experience
                        startDate = "May 2017"
                        endDate = "August 2018"
                        jobName = "USC Teaching Assistant"
                        jobDesc = "TA for CSCI 455, Introduction to Programming and System Design."
                    />

                    <Experience
                        startDate = "December 2017"
                        endDate = "May 2018"
                        jobName = "Accenture"
                        jobDesc = "Unit testing, Integration Testing, Sanity Testing on various web applications using Selenium Web Driver. Created Automated Web Applications testing framework using Selenium WebDriver. Automated Computer Desktop Applications and Web Applications utilizing Unified Functional Testing (UFT)."
                    />

                    <Experience
                        startDate = "June 2017"
                        endDate = "September 2018"
                        jobName = "ABGO Design"
                        jobDesc = "Worked on new website implementation, backend support for client websites, new feature development. Technologies -
                        HTML, Bootstrap, jQuery, CSS, PHP."
                    />

                    <hr style={{borderTop:'3px solid #e22947'}}></hr>

                    <Skills
                        skill = "React"
                        progress = "88"
                    />

                    <Skills
                        skill = "C"
                        progress = "90"
                    />

                    <Skills
                        skill = "C++"
                        progress = "90"
                    />

                    <Skills
                        skill = "Java"
                        progress = "90"
                    />

                    <Skills
                        skill = "Node.js"
                        progress = "76"
                    />  
                </Cell>
            </Grid>
        )
    }
}

export default Resume;