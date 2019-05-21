import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import config from "./firebaseconfig";

firebase.initializeApp(config);

class App extends Component {
  state = {
    image: "",
    imageURL: "",
    progress: 0
  };
  handleUploadStart = () => {
    this.setState({
      progress: 0
    });
  };
  handleUploadSuccess = filename => {
    this.setState({
      image: filename,
      progress: 100
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imageURL: url }));
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <label>Progress</label>
        <p>{this.state.progress}</p>
        <br />
        <br />
        <br />
        <label>Image:</label>
        {this.state.image && <img src={this.state.imageURL} />}
        <br />
        <br />
        <br />
        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadSuccess={this.handleUploadSuccess}
        />
      </div>
    );
  }
}

export default App;
