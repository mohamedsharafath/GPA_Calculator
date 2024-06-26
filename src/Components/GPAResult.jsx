import React, { useState } from 'react';

function GPAResult({ gpa }) {
  let appreciationMessage = '';
  const [view,setView]=useState(false);

  if (gpa >= 9.0) {
    appreciationMessage = `Congratulations! 🎉 Your GPA of ${gpa} is outstanding! Keep up the amazing work!`;
  } else if (gpa >= 8.0) {
    appreciationMessage = `Wow! 😊 Your GPA of ${gpa} is excellent! Keep striving for greatness!`;
  } else if (gpa >= 7.0) {
    appreciationMessage = `Great job! 👏 Your GPA of ${gpa} is very good! Keep pushing yourself!`;
  } else if (gpa >= 6.0) {
    appreciationMessage = `Well done! 👍 Your GPA of ${gpa} is good! Keep up the hard work!`;
  } else if (gpa >= 5.0) {
    appreciationMessage = `Good effort! 🙂 Your GPA of ${gpa} is average. Keep aiming higher!`;
  } else {
    appreciationMessage = `Keep working hard! 😊 Your GPA of ${gpa} is below average. You can improve!`;
  }

  return (
    <div className="GPAResult">
      {!view ? (
        <button onClick={() => setView(true)}>Calculate Result</button>
      ) : (
        <div>
          <h2>GPA Result</h2>
          <p>GPA: {gpa}</p>
          <p>{appreciationMessage}</p>
        </div>
      )}
    </div>
  );
  
}

export default GPAResult;
