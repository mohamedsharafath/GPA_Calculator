import React, { useState } from 'react';
import SubjectForm from './SubjectForm';
import SubjectList from './SubjectList';
import GPAResult from './GPAResult';
import "./App.css"

function App() {
  const [subjects, setSubjects] = useState([]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const updateSubject = (index, updatedSubject) => {
    const newSubjects = [...subjects];
    newSubjects[index] = updatedSubject;
    setSubjects(newSubjects);
  };

  const deleteSubject = (index) => {
    const newSubjects = [...subjects];
    newSubjects.splice(index, 1);
    setSubjects(newSubjects);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    subjects.forEach(subject => {
      totalCredits += subject.credits;
      totalGradePoints += subject.credits * subject.grade;
    });

    return totalCredits ? (totalGradePoints / totalCredits).toFixed(2) : 0;
  };

  return (
    <div className="App">
      <h1>GPA Calculator</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} updateSubject={updateSubject} deleteSubject={deleteSubject} />
      <GPAResult gpa={calculateGPA()} />
    </div>
  );
}

export default App;
