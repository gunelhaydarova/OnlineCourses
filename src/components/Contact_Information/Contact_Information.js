import React from 'react';
import '../../App.css';
import './Contact_Information.css';


class Contact_Information  extends React.Component { 
    constructor(props) {
      super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }
  render() {
  
    return (  
         <div className="container ">
         <p className="contact_header"> Contact Information </p>
         <div className=" contact_info">
          <div className="card">
          <i className=" fa fa-map-marker"  aria-hidden="true"/>   
            <span>198 West 21th Street,
                    Suite 721 New York NY 10016</span>
          </div>
          <div className="card">
          <i className="fa  fa-mobile"  aria-hidden="true"/>   
            <span>+ 1235 2355 98 </span>
          </div>
          <div className="card">
          <i className="fa fa-paper-plane"  aria-hidden="true" />
            <span>info@yoursite.com</span>
          </div>
            <div className="card">
          <i className="fa fa-globe"  />   
            <span>yourwebsite.com</span>
          </div>
          </div> 
          <div className="App">
            <p className="contact_header">Message Us </p>
            <form id="contact-form" className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group"> 
                <input type="text" placeholder = {"Name"} className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    );
  }
  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
  }
}
export default Contact_Information;
 