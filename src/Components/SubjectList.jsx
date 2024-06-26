import React from 'react';

function SubjectList({ subjects, updateSubject, deleteSubject }) {
  const handleUpdate = (index) => {
    const newCredits = parseFloat(prompt('Enter new credits:', subjects[index].credits));
    const newGrade = parseFloat(prompt('Enter new grade:', subjects[index].grade));
    if (!isNaN(newCredits) && !isNaN(newGrade)) {
      updateSubject(index, { credits: newCredits, grade: newGrade });
    }
  };

  const handleDelete = (index) => {
    deleteSubject(index);
  };

  return (
    <div>
      <h2>Subject List</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            <div>
              <span>Credits: {subject.credits}</span>
              <span>Grade: {subject.grade}</span>
            </div>
            <div>
              <button onClick={() => handleUpdate(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
