import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
    // console.log(id);
  }

  render() {
    return (
      <li className="Projects">
        <strong>{this.props.project.id}</strong>: {this.props.project.category}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</a>
      </li>
    );
  }
}

export default ProjectItem;
