import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header'
import GeneralInfo from './Components/General_Info'
import Education from './Components/Education'
import Display from './Components/Display'
import uniqid from 'uniqid'
import EDIT_EDUCATION from './Components/Edit_Education'
import Experience from './Components/Experience'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
      education: '',
      educationArray: [],
      experience: '',
      experienceArray: [],
    }
  }

   education = {
    school: '',
    subject: '',
    degree: '',
    start_date: '',
    end_date: '',
    id: '',
    }

    experience = {
      position: '',
      company: '',
      city: '',
      start_date: '',
      end_date: '',
      id: '',
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

  changeDescription = (e) => {
    this.setState({description: e.target.value,})
  }

  changeSchool = (e) => {
    this.education.school = e.target.value;
    this.setState({education: this.education});
  }
  
  changeSubject = (e) => {
    this.education.subject = e.target.value;
    this.setState({education: this.education});
  }
  
  changeDegree= (e) => {
    this.education.degree = e.target.value;
    this.setState({education: this.education})
  }
  
  changeEducationStartDate = (e) => {
    this.education.start_date = e.target.value;
    this.setState({education: this.education})
  }

  changeEducationEndDate = (e) => {
    this.education.end_date = e.target.value;
    this.setState({education: this.education})
  }

  changePosition = (e) => {
    this.experience.position = e.target.value;
    this.setState({experience: this.experience});
  }

  changeCompany = (e) => {
    this.experience.company = e.target.value;
    this.setState({experience: this.experience});
  }

  changeCity = (e) => {
    this.experience.city = e.target.value;
    this.setState({experience: this.experience});
  }

  changeExperienceStartDate = (e) => {
    this.experience.start_date = e.target.value;
    this.setState({experience: this.experience});
  }

  changeExperienceEndDate = (e) => {
    this.experience.end_date = e.target.value;
    this.setState({experience: this.experience});
  }

  formSubmitEducation = (e) => {
    e.preventDefault();
    this.education.id = uniqid();
    this.setState({education: this.education}, () => {
      this.setState({
        educationArray: this.state.educationArray.concat(this.state.education),
        education: ''
      }, () => {
          this.education = {
          school: '',
          subject: '',
          degree: '',
          start_date: '',
          end_date: '',
          id: '',
          }
      })
    });
    for (let i = 0; i < 5; i += 1) {
      e.target.parentElement.children[i].children[1].value = '';
      if (i < 3) {
        e.target.parentElement.children[i].children[2].textContent = '';
      } 
    }
  }

  formSubmitExperience = (e) => {
      e.preventDefault();
      this.experience.id = uniqid();
      this.setState({experience: this.experience}, () => {
        this.setState({
          experienceArray: this.state.experienceArray.concat(this.state.experience),
          experience: ''
        }, () => {
            this.experience = {
            position: '',
            company: '',
            city: '',
            start_date: '',
            end_date: '',
            id: '',
            }
        })
      });
      for (let i = 0; i < 5; i += 1) {
        e.target.parentElement.children[i].children[1].value = '';
        if (i < 3) {
          e.target.parentElement.children[i].children[2].textContent = '';
        } 
      }
    }

  CHANGE_DETAILS = (e) => {
    const NEW_EDUCATION = {
      school: e.target.parentElement.parentElement.children[0].children[1].value,
      subject: e.target.parentElement.parentElement.children[1].children[1].value,
      degree: e.target.parentElement.parentElement.children[2].children[1].value,
      start_date: e.target.parentElement.parentElement.children[3].children[1].value,
      end_date: e.target.parentElement.parentElement.children[4].children[1].value,
      id: e.target.dataset.id,
    }
    console.log(NEW_EDUCATION);
    const NEW_EDUCATION_ARRAY = [];
    this.state.educationArray.forEach(current => {
      if (current.id === NEW_EDUCATION.id) {
        current = NEW_EDUCATION;
        console.log(current);
        NEW_EDUCATION_ARRAY.push(current);
      } else {
        NEW_EDUCATION_ARRAY.push(current);
      }
      this.setState({educationArray: NEW_EDUCATION_ARRAY}, () => {
        document.querySelector('#edit-details').classList.toggle('hidden');
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header name='CV Creator'/>
        <div  className ='cv-info'>
          <GeneralInfo changeFirstName={this.changeFirstName} changeLastName={this.changeLastName} changeEmail={this.changeEmail} 
           changePhone={this.changePhone} changeDescription={this.changeDescription} />
          <hr id='hr-1'/>
          <Education SCHOOL={this.changeSchool} SUBJECT={this.changeSubject} DEGREE={this.changeDegree}
           START={this.changeEducationStartDate}
           END={this.changeEducationEndDate} array={this.state.educationArray} education={this.state.education}
           FORM_SUBMIT={this.formSubmitEducation} />
          <hr id='hr-2'/>
          <Experience POSITION={this.changePosition} COMPANY={this.changeCompany} CITY={this.changeCity}
           START={this.changeExperienceStartDate} END={this.changeExperienceEndDate} FORM_SUBMIT={this.formSubmitExperience} />
        </div>
        <Display fullName={`${this.state.firstName} ${this.state.lastName}`} email={this.state.email}
         phone={this.state.phone} DETAILS={this.state.educationArray} description={this.state.description} />
        <EDIT_EDUCATION update={this.CHANGE_DETAILS} />  
      </div>
    );
  }
}

export default App;
