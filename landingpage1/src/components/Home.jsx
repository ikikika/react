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

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/img01.jpg" circle responsive className="profile-pic" />
                        <h3>Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </Col>
                
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/img01.jpg" circle responsive className="profile-pic" />
                        <h3>Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/img01.jpg" circle responsive className="profile-pic" />
                        <h3>Ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </Col>
                </Row>

                
            </Grid>
        )
    }
}