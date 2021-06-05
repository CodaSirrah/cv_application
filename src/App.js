import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header'
import GeneralInfo from './Components/General_Info'
import Education from './Components/Education'
import Display from './Components/Display'
import uniqid from 'uniqid'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      education: '',
      educationArray: [],
    }
  }

   education = {
    school: '',
    subject: '',
    award: '',
    start_date: '',
    end_date: '',
    id: uniqid(),
    }
  changeFirstName = (e) => {
    this.setState({firstName: e.target.value,})
  }
  
  changeLastName = (e) => {
    this.setState({lastName: e.target.value,})
  }
  
  changeEmail = (e) => {
    this.setState({email: e.target.value,})
  }
  
  changePhone = (e) => {
    this.setState({phone: e.target.value,})
  }



  changeSchool = (e) => {
    this.education.school = e.target.value;
    this.setState({education: this.education});
  }
  
  changeSubject = (e) => {
    this.education.subject = e.target.value;
    this.setState({education: this.education});
  }
  
  changeAward = (e) => {
    this.education.award = e.target.value;
    this.setState({education: this.education})
  }
  
  changeStartDate = (e) => {
    this.education.start_date = e.target.value;
    this.setState({education: this.education})
  }

  changeEndDate = (e) => {
    this.education.end_date = e.target.value;
    this.setState({education: this.education})
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.setState({
      educationArray: this.state.educationArray.concat(this.state.education),
      education: ''
    }, () => {
      return this.education = {
        school: '',
        subject: '',
        award: '',
        start_date: '',
        end_date: '',
        id: '',
        }
    })
    for (let i = 0; i < 5; i += 1) {
      console.log(e.target.parentElement.children[i].children[i]);
    }
    
  }

  render() {
    return (
      <div className="App">
        <Header name='CV Application Template'/>
          <div  className ='cv-info'>
            <GeneralInfo changeFirstName={this.changeFirstName} 
            changeLastName={this.changeLastName} changeEmail={this.changeEmail} changePhone={this.changePhone}/>
            <hr />
            <Education SCHOOL={this.changeSchool} SUBJECT={this.changeSubject} AWARD={this.changeAward} START={this.changeStartDate}
            END={this.changeEndDate} array={this.state.educationArray} education={this.state.education} FORM_SUBMIT={this.formSubmit}/>
          </div>
          <Display fullName={`${this.state.firstName} ${this.state.lastName}`} email={this.state.email}
           phone={this.state.phone} DETAILS={this.state.educationArray}/>
      </div>
    );
  }
}

export default App;
