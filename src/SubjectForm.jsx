import React, { useState } from 'react';

function SubjectForm({ addSubject }) {
  const [credits, setCredits] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credits && grade) {
      addSubject({ credits: parseFloat(credits), grade: parseFloat(grade) });
      setCredits('');
      setGrade('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Credits:</label>
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Grade:</label>
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Subject</button>
    </form>
  );
}

export default SubjectForm;
