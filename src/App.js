import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import GeneralInfo from "./Components/General_Info";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Display from "./Components/Display";
import EDIT_EDUCATION from "./Components/Edit_Education";
import EDIT_EXPERIENCE from "./Components/Edit_Experience";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
      education: "",
      educationArray: [],
      experience: "",
      experienceArray: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  education = {
    school: "",
    subject: "",
    degree: "",
    start_date: "",
    end_date: "",
    id: "",
  };

  experience = {
    position: "",
    company: "",
    city: "",
    start_date: "",
    end_date: "",
    id: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  formSubmitEducation = (e) => {
    e.preventDefault();
    this.education.id = uniqid();
    this.setState({ education: this.education }, () => {
      this.setState(
        {
          educationArray: this.state.educationArray.concat(
            this.state.education
          ),
          education: "",
        },
        () => {
          this.education = {
            school: "",
            subject: "",
            degree: "",
            start_date: "",
            end_date: "",
            id: "",
          };
        }
      );
    });
    for (let i = 0; i < 5; i += 1) {
      e.target.parentElement.children[i].children[1].value = "";
      if (i < 3) {
        e.target.parentElement.children[i].children[2].textContent = "";
      }
    }
  };

  formSubmitExperience = (e) => {
    e.preventDefault();
    this.experience.id = uniqid();
    this.setState({ experience: this.experience }, () => {
      this.setState(
        {
          experienceArray: this.state.experienceArray.concat(
            this.state.experience
          ),
          experience: "",
        },
        () => {
          this.experience = {
            position: "",
            company: "",
            city: "",
            start_date: "",
            end_date: "",
            id: "",
          };
        }
      );
    });
    for (let i = 0; i < 5; i += 1) {
      e.target.parentElement.children[i].children[1].value = "";
      if (i < 3) {
        e.target.parentElement.children[i].children[2].textContent = "";
      }
    }
  };

  CHANGE_EDUCATION_DETAILS = (e) => {
    const NEW_EDUCATION = {
      school:
        e.target.parentElement.parentElement.children[0].children[1].value,
      subject:
        e.target.parentElement.parentElement.children[1].children[1].value,
      degree:
        e.target.parentElement.parentElement.children[2].children[1].value,
      start_date:
        e.target.parentElement.parentElement.children[3].children[1].value,
      end_date:
        e.target.parentElement.parentElement.children[4].children[1].value,
      id: e.target.dataset.id,
    };
    document
      .querySelector("#edit-education-details")
      .classList.toggle("hidden");
    const NEW_EDUCATION_ARRAY = [];
    this.state.educationArray.forEach((current) => {
      if (current.id === NEW_EDUCATION.id) {
        current = NEW_EDUCATION;
        NEW_EDUCATION_ARRAY.push(current);
      } else {
        NEW_EDUCATION_ARRAY.push(current);
      }
      this.setState({ educationArray: NEW_EDUCATION_ARRAY });
    });
  };

  CHANGE_EXPERIENCE_DETAILS = (e) => {
    const NEW_EXPERIENCE = {
      position:
        e.target.parentElement.parentElement.children[0].children[1].value,
      company:
        e.target.parentElement.parentElement.children[1].children[1].value,
      city: e.target.parentElement.parentElement.children[2].children[1].value,
      start_date:
        e.target.parentElement.parentElement.children[3].children[1].value,
      end_date:
        e.target.parentElement.parentElement.children[4].children[1].value,
      id: e.target.dataset.id,
    };
    document
      .querySelector("#edit-experience-details")
      .classList.toggle("hidden");
    const NEW_EXPERIENCE_ARRAY = [];
    this.state.experienceArray.forEach((current) => {
      if (current.id === NEW_EXPERIENCE.id) {
        current = NEW_EXPERIENCE;
        NEW_EXPERIENCE_ARRAY.push(current);
      } else {
        NEW_EXPERIENCE_ARRAY.push(current);
      }
      this.setState({ experienceArray: NEW_EXPERIENCE_ARRAY });
    });
  };
  render() {
    return (
      <div className="App">
        <Header name="CV Creator" />
        <div className="cv-info">
          <GeneralInfo
            changeFirstName={this.handleChange}
            changeLastName={this.handleChange}
            changeEmail={this.handleChange}
            changePhone={this.handleChange}
            changeDescription={this.handleChange}
          />
          <hr id="hr-1" />
          <Education
            SCHOOL={this.changeSchool}
            SUBJECT={this.changeSubject}
            DEGREE={this.changeDegree}
            START={this.changeEducationStartDate}
            END={this.changeEducationEndDate}
            FORM_SUBMIT={this.formSubmitEducation}
          />
          <hr id="hr-2" />
          <Experience
            POSITION={this.changePosition}
            COMPANY={this.changeCompany}
            CITY={this.changeCity}
            START={this.changeExperienceStartDate}
            END={this.changeExperienceEndDate}
            FORM_SUBMIT={this.formSubmitExperience}
          />
        </div>
        <Display
          fullName={`${this.state.firstName} ${this.state.lastName}`}
          email={this.state.email}
          phone={this.state.phone}
          EDUCATION_DETAILS={this.state.educationArray}
          description={this.state.description}
          EXPERIENCE_DETAILS={this.state.experienceArray}
        />
        <EDIT_EDUCATION update={this.CHANGE_EDUCATION_DETAILS} />
        <EDIT_EXPERIENCE update={this.CHANGE_EXPERIENCE_DETAILS} />
      </div>
    );
  }
}

export default App;
