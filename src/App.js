import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import * as SurveyPDF from "survey-pdf";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Survey.StylesManager.applyTheme("bootstrap");

class App extends Component {
  
  json = {
    "pages": [
     {
      "name": "basicDetails",
      "elements": [
       {
        "type": "text",
        "name": "name",
        "title": "Full Name"
       },
       {
        "type": "dropdown",
        "name": "age",
        "title": "Age",
        "isRequired": true,
        "choicesMin": 20,
        "choicesMax": 70
       },
       {
        "type": "radiogroup",
        "name": "gender",
        "title": "Gender",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Male"
         },
         {
          "value": "item2",
          "text": "Female"
         }
        ]
       },
       {
        "type": "text",
        "name": "contactNo",
        "title": "Contact No",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "email",
        "title": "Email",
        "isRequired": true
       }
      ],
      "title": "Basic Details"
     },
     {
      "name": "education_primary",
      "elements": [
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "panel",
          "name": "panel3",
          "elements": [
           {
            "type": "text",
            "name": "grade_5_school",
            "title": "School",
            "isRequired": true
           },
           {
            "type": "dropdown",
            "name": "grade_5_year",
            "title": "Year",
            "isRequired": true,
            "choicesMin": 1960,
            "choicesMax": 2010
           },
           {
            "type": "text",
            "name": "grade_5_results",
            "title": "Marks",
            "isRequired": true,
            "inputType": "number"
           },
           {
            "type": "radiogroup",
            "name": "question13",
            "title": "Result",
            "isRequired": true,
            "choices": [
             "Pass",
             "Fail"
            ],
            "colCount": 2
           }
          ],
          "title": "Grade 5 Scholarship"
         },
         {
          "type": "panel",
          "name": "panel2",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "School",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Year",
            "isRequired": true
           },
           {
            "type": "radiogroup",
            "name": "question34",
            "title": "Result",
            "isRequired": true,
            "choices": [
             "Pass",
             "Fail"
            ],
            "colCount": 2
           }
          ],
          "title": "Ordinary Level"
         },
         {
          "type": "panel",
          "name": "panel7",
          "elements": [
           {
            "type": "paneldynamic",
            "name": "question9",
            "title": "Please mention GCE A/L qulifications",
            "isRequired": true,
            "templateElements": [
             {
              "type": "text",
              "name": "question11",
              "title": "Year",
              "isRequired": true
             },
             {
              "type": "dropdown",
              "name": "question10",
              "title": "Stream",
              "isRequired": true,
              "choices": [
               "Physical Science",
               "Biological Science",
               "Commerce",
               "Arts"
              ]
             },
             {
              "type": "dropdown",
              "name": "question12",
              "title": "Attempt",
              "isRequired": true,
              "choices": [
               "1st Attempt",
               "2nd Attempt",
               "3rd Attempt"
              ]
             },
             {
              "type": "radiogroup",
              "name": "question35",
              "title": "Result",
              "isRequired": true,
              "choices": [
               "Pass",
               "Fail"
              ],
              "colCount": 2
             }
            ],
            "panelCount": 0,
            "panelAddText": "Add result of an Attempt",
            "panelRemoveText": "Remove results"
           }
          ],
          "title": "Advanced Level"
         }
        ]
       }
      ],
      "title": "Education"
     },
     {
      "name": "education_secondary",
      "elements": [
       {
        "type": "panel",
        "name": "panel4",
        "elements": [
         {
          "type": "paneldynamic",
          "name": "question4",
          "title": " Please mention University Qualifications ",
          "isRequired": true,
          "templateElements": [
           {
            "type": "text",
            "name": "question5",
            "title": "Name of the University",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "question6",
            "title": "Name of the Degree",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "question7",
            "title": "Year",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "question8",
            "title": "Followed main subjects"
           }
          ],
          "panelAddText": "Add university qualification",
          "panelRemoveText": "Remove university qualification"
         }
        ],
        "title": "University Qualifications"
       }
      ],
      "title": "Education"
     },
     {
      "name": "professionalQualifications",
      "elements": [
       {
        "type": "panel",
        "name": "panel5",
        "elements": [
         {
          "type": "paneldynamic",
          "name": "question14",
          "title": "Professional courses",
          "templateElements": [
           {
            "type": "text",
            "name": "question15",
            "title": "Course Name",
            "isRequired": true
           },
           {
            "type": "text",
            "name": "question16",
            "title": "Institute",
            "isRequired": true
           },
           {
            "type": "dropdown",
            "name": "question22",
            "title": "Year",
            "isRequired": true,
            "choices": [
             "item1",
             "item2",
             "item3"
            ],
            "choicesMin": 1970,
            "choicesMax": 2019
           },
           {
            "type": "text",
            "name": "question17",
            "title": "Professional Area",
            "isRequired": true
           },
           {
            "type": "dropdown",
            "name": "question19",
            "title": "Duration",
            "isRequired": true,
            "choices": [
             " < 6 Months",
             "6 Months",
             "1 Year",
             "2 Years",
             "3 Years",
             "4 Years",
             "5 Years"
            ]
           },
           {
            "type": "dropdown",
            "name": "question23",
            "title": "Followed time period",
            "isRequired": true,
            "choices": [
             "Before O/L",
             "During O/L",
             "After O/L",
             "During A/L",
             "After A/L",
             "During University",
             "After University"
            ]
           },
           {
            "type": "comment",
            "name": "question20",
            "title": "Required Qualifications (Please comment required qualifications)",
            "isRequired": true
           },
           {
            "type": "rating",
            "name": "question18",
            "title": "Course recommendation",
            "isRequired": true,
            "rateValues": [
             "Highly not recommended",
             "Not recommended",
             "Neutral",
             "Recommended",
             "Highly recommended"
            ]
           },
           {
            "type": "comment",
            "name": "question21",
            "title": "Comments ( Please mention how the course has helped you in your career growth)",
            "isRequired": true
           }
          ],
          "panelAddText": "Add new professional course",
          "panelRemoveText": "Remove professional course"
         }
        ]
       }
      ],
      "title": "Professional Qualifications"
     },
     {
      "name": "workExperience",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "question24",
        "title": "Professional Experience",
        "isRequired": true,
        "templateElements": [
         {
          "type": "text",
          "name": "question25",
          "title": "Company"
         },
         {
          "type": "dropdown",
          "name": "question28",
          "title": "Designation",
          "isRequired": true,
          "choices": [
           "Intern",
           "Associate Software Engineer",
           "Software Engineer",
           "Senior Software Engineer",
           "Associate Tech Lead",
           "Tech Lead",
           "Senior Tech Lead",
           "Associate Consultant",
           "Consultant",
           "Senior Consultant",
           "Associate Architect",
           "Architect",
           "Senior Architect",
           "Deputy Director",
           "Director",
           "Senior Director",
           "Vice President",
           "President",
           "Assistant Project Manager",
           "Project Manager",
           "Senior Project Manager"
          ]
         },
         {
          "type": "panel",
          "name": "panel6",
          "elements": [
           {
            "type": "dropdown",
            "name": "question26",
            "title": "From",
            "isRequired": true,
            "choicesMin": 1980,
            "choicesMax": 2019
           },
           {
            "type": "dropdown",
            "name": "question27",
            "startWithNewLine": false,
            "title": "To",
            "isRequired": true,
            "choicesMin": 1980,
            "choicesMax": 2019
           }
          ],
          "title": "Durtaion"
         }
        ],
        "panelAddText": "Add Work Experience",
        "panelRemoveText": "Remove Work Experience"
       }
      ],
      "title": "Work"
     },
     {
      "name": "extraCurricular",
      "elements": [
       {
        "type": "paneldynamic",
        "name": "question29",
        "title": " Extra Activities",
        "templateElements": [
         {
          "type": "text",
          "name": "question30",
          "title": "Extra Curricular Activity ( Club, Society, Prefect etc )",
          "isRequired": true
         },
         {
          "type": "dropdown",
          "name": "question31",
          "title": "From",
          "isRequired": true,
          "choicesMin": 1980,
          "choicesMax": 2019
         },
         {
          "type": "dropdown",
          "name": "question32",
          "startWithNewLine": false,
          "title": "To",
          "isRequired": true,
          "choicesMin": 1980,
          "choicesMax": 2019
         },
         {
          "type": "boolean",
          "name": "question33",
          "title": "Was it helpful for your career growth",
          "labelTrue": "Yes",
          "labelFalse": "No"
         }
        ],
        "panelCount": 1
       }
      ],
      "title": "Extra Curricular Activities"
     }
    ]
   };

//   json = {
//     questions: [
//         {
//             name: "name",
//             type: "text",
//             title: "Please enter your name:",
//             placeHolder: "Jon Snow",
//             isRequired: true
//         }, {
//             name: "birthdate",
//             type: "text",
//             inputType: "date",
//             title: "Your birthdate:",
//             isRequired: true
//         }, {
//             name: "color",
//             type: "text",
//             inputType: "color",
//             title: "Your favorite color:"
//         }, {
//             name: "email",
//             type: "text",
//             inputType: "email",
//             title: "Your e-mail:",
//             placeHolder: "jon.snow@nightwatch.org",
//             isRequired: true,
//             validators: [
//                 {
//                     type: "email"
//                 }
//             ]
//         }
//     ]
// };
  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + JSON.stringify(result.data));
  }

  savePDF = (model) => {
    var surveyPDF = new SurveyPDF.SurveyPDF(this.json);
    surveyPDF.data = model.data;
    surveyPDF.save();
  }

  render() {
    var model = new Survey.Model(this.json);
    return (
      <Router>
      <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="auth-wrapper">
        <div className="auth-inner">
        <div className="survey">
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>
        </div>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;