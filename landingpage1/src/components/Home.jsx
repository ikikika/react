import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render(){
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome lorem ipsum</h2>
                    <p>Build a landing page with React, React-router and react-bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
            </Grid>
        )
    }
}