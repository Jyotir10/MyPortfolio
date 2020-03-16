import React from "react"
import {Grid,Cell} from "react-mdl"

class Experience extends React.Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <h4>{this.props.startDate} - {this.props.endDate}</h4>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.jobName}</h4>
                    <p>{this.props.jobDesc}</p>
                </Cell>
            </Grid>
        )
        
    }
}

export default Experience