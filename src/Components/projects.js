import React from "react"
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";


class Projects extends React.Component{
    constructor(){
        super()
        this.state = {
            activeTab : 0
        }
    }
    //class initialized sith state
    toggleCategories (){
        if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/* project #1 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(data:image/jpeg;base64,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) center / cover'}}>
                        Bank System Emulator (Using C)
                        </CardTitle>
                        <CardText>
                        Implemented bank deposit system using circular doubly linked list to keep record of deposits and withdrawal from an account.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* project #2 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(data:image/jpeg;base64,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) center / cover'}}>
                        Token Bucket Emulator (Using C)
                        </CardTitle>
                        <CardText>
                        Implemented a Token Bucket Emulator system using multi-threading. This emulator showed the (internet) traffic flow.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* project #3 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(data:image/jpeg;base64,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) center / cover'}}>
                        Weenix OS Implementation : PROCS (Using C)
                        </CardTitle>
                        <CardText>
                        Implemented threads, processes, synchronization primitives, boot loader, scheduler and various helper functions that form the backbone of the kernel. These objects were implemented fully in kernel code. Weenix is an Operating System capable of running multiple processes and threads.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://images.ctfassets.net/o1q32s3xqe5h/6W8fsy0pvBukwpoFyeDp74/c3566d59bbe543b1b89c8fce7c23c386/create-react-app.png?w=769&q=100) center / cover'}}>
                        MyPortfolio
                        </CardTitle>
                        <CardText>
                            Made my portfolio using React implementing routing.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "https://youtu.be/C3ViD3A-p-A" rel="noopener noreferrer" target="_blank">Video</a></Button>
                            {/* https://www.youtube.com/watch?v=F9-sENXO2jw&feature=youtu.be */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                {/* project 2 */}
                <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://images.ctfassets.net/o1q32s3xqe5h/6W8fsy0pvBukwpoFyeDp74/c3566d59bbe543b1b89c8fce7c23c386/create-react-app.png?w=769&q=100) center / cover'}}>
                        Meme Generator
                        </CardTitle>
                        <CardText>
                            Developed a meme generator which makes an API call to get the image for the meme and you can type the top and bottom ext using the form on the page.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "https://www.youtube.com/watch?v=vOz_U1t8rG8" rel="noopener noreferrer" target="_blank">Video</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                {/* Project 3 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://images.ctfassets.net/o1q32s3xqe5h/6W8fsy0pvBukwpoFyeDp74/c3566d59bbe543b1b89c8fce7c23c386/create-react-app.png?w=769&q=100) center / cover'}}>
                        To-do List
                        </CardTitle>
                        <CardText>
                            Implemented a to-do list using React.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "https://youtu.be/1mERNOu8XQM" rel="noopener noreferrer" target="_blank">Video</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>


                </div>
                
                
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/* project #1 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://specials-images.forbesimg.com/imageserve/1138781799/960x0.jpg?fit=scale) center / cover'}}>
                        Implementation of Search Stratergies (A*, BFS and DFS)
                        </CardTitle>
                        <CardText>
                            Implemented basic search stratergies for finding an optimal route for mars rover (A*, BFS, DFS).
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* project #2 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://specials-images.forbesimg.com/imageserve/1138781799/960x0.jpg?fit=scale) center / cover'}}>
                        Game Playing Agengt (Halma)
                        </CardTitle>
                        <CardText>
                        Built a game playing (AI) agent utilizing (Adversarial Search) alpha beta pruning. The agent predicts next 3 moves (all possible future moves) from the given state and evaluates best move. Programming Language used was Python. The agent (similar to AlphaGo) is capable of defeating human opponent. My agent was in top 50 out of 780 agents.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* project #3 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://specials-images.forbesimg.com/imageserve/1138781799/960x0.jpg?fit=scale) center / cover'}}>
                        First Order Logic Inference Engine
                        </CardTitle>
                        <CardText>
                        Implemented a First Order Logic Inference Engine (Based on Resolution) to deduce whether a query is true or false from a given Knowledge Base using Resolution. Utilized Inference Engine for medicine prescription purposes. Deployed inference engine to alert patients on whether to take a particular medicine or not based on their allergies and effects of drugs to improve patient care.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/* project #1 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://www.imf.org/external/pubs/ft/fandd/2019/09/images/092019/Kumar-index.jpg) center / cover'}}>
                        Web Application - Event Search and Ticket Booking.
                        </CardTitle>
                        <CardText>
                        Technologies - Node.js, jQuery, PHP, Bootstrap, JavaScript, HTML, AWS Elastic Beanstalk and CSS. Created / Implemented an event search and ticket booking (based on genre) web and iOS application utilized by university students to book tickets. Leveraged Ticketmaster, Spotify, Songkick, GCP and geolocation APIs for Event
Search App (REST API’s).
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "https://www.youtube.com/watch?v=lxs742j79GY&feature=youtu.be" rel="noopener noreferrer" target="_blank">Video1</a></Button>
                            <Button colored><a href = "https://www.youtube.com/watch?v=fqUxESv26H4&feature=youtu.be" rel="noopener noreferrer" target="_blank">Video2</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* Project #2 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://www.imf.org/external/pubs/ft/fandd/2019/09/images/092019/Kumar-index.jpg) center / cover'}}>
                        iOS Application - Event Search and Ticket Booking.
                        </CardTitle>
                        <CardText>
                        Technologies - Node.js, jQuery, PHP, Bootstrap, JavaScript, HTML, AWS Elastic Beanstalk and CSS. Created / Implemented an event search and ticket booking (based on genre) web and iOS application utilized by university students to book tickets. Leveraged Ticketmaster, Spotify, Songkick, GCP and geolocation APIs for Event
Search App (REST API’s).
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "https://www.youtube.com/watch?v=UYml-UkjqsQ&feature=youtu.be" rel="noopener noreferrer" target="_blank">Video</a></Button>
                            {/* https://www.youtube.com/watch?v=UYml-UkjqsQ&feature=youtu.be */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* project #3 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://www.imf.org/external/pubs/ft/fandd/2019/09/images/092019/Kumar-index.jpg) center / cover'}}>
                        Social Networking Website
                        </CardTitle>
                        <CardText>
                        Created a website which allows user to login and upload data in audio/text accessible to other users. Website also allows live notification to user about new uploads by their friends.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            <Button colored><a href = "http://54.188.42.232" rel="noopener noreferrer" target="_blank">Website</a></Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    {/* project #4 */}
                    <Card shadow ={5} style= {{minWidth:'450', margin:'auto'}}>
                        <CardTitle style = {{color:'#fff',height:'176px',
                        background : 'url(https://www.imf.org/external/pubs/ft/fandd/2019/09/images/092019/Kumar-index.jpg) center / cover'}}>
                        Basic Search Engine. Technologies Used - Java, Python, Apache Tika and Solr.
                        </CardTitle>
                        <CardText>
                        Devised basic search engine using Solr and added autocomplete, spell-correction and snippet generation. Utilized Apache Tika to parse web pages to create a list of words required for spell correction. Configured suggest features in Solr for auto-completion. Used NetworkX library in Python to determine page rank.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href = "https://github.com/Jyotir10" rel="noopener noreferrer" target="_blank">Github</a></Button>
                            {/* <Button colored>Video</Button> */}
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }// this function renders the stuff

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>OS</Tab>
                    <Tab>AI</Tab>
                    <Tab>Web</Tab>
                </Tabs>
                <Grid>
                    <Cell col = {12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                    
            </div>

            
        )
    }
}

export default Projects