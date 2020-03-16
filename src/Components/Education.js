import React from "react"
import {Grid,Cell} from "react-mdl"

class Education extends React.Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <h4>{this.props.startDate} - {this.props.endDate}</h4>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.univName}</h4>
                    <p>{this.props.schoolDesc}</p>
                </Cell>
            </Grid>
        )
        
    }
}

export default Education