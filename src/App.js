import React from 'react';
import './App.css';
// Importing libraries
import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl';
import Main from'./Components/main'
import { Link } from 'react-router-dom';
// import LandingPage from './Components/landingpage'

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className = "head-color" title="MyPortfolio" scroll>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  {/* <Link to="/aboutme">About  Me</Link> */}
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="MyPortfolio">
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  {/* <Link to="/aboutme">About  Me</Link> */}
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contacts</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              {/* this is where the content of our page starts */}
              <Main/>
              {/* the main above does all the work for us of routing */}
          </Content>
      </Layout>
    </div>
  );
}

export default App;
