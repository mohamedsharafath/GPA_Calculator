### GPA Calculator

## Overview
The GPA Calculator is a web application that helps college students calculate their GPA based on a weighted grading system. This tool allows users to input their course credits and grades, dynamically calculate their GPA, and receive an appreciation message based on their performance.

## Features

- Add subjects with their respective credits and grades.
- Edit or delete existing subjects.
- Calculate GPA based on the entered subjects.
- Display GPA result along with an appreciation message based on the GPA score.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installing

1. Clone the repository:
git clone https://github.com/your-username/gpa-calculator.git
2.Navigate to the project directory:
cd gpa-calculator
3.Install the dependencies:
npm install
4.Start the development server:
npm start
Open your browser and navigate to http://localhost:3000 to see the application in action.

### Project Structure
SubjectForm.js: Component for adding new subjects.
SubjectList.js: Component for displaying the list of subjects.
GPAResult.js: Component for displaying the calculated GPA and appreciation message.
App.js: Main component where all the components are integrated.
App.css: Styling for the application.

### Usage
Adding Subjects:
Fill in the credits and grade for each subject and click "Add Subject".

Editing Subjects:
Click the "Edit" button next to a subject, update the credits and grade, and save the changes.

Deleting Subjects:
Click the "Delete" button next to a subject to remove it from the list.

Calculating GPA:
Once all subjects are added, click the "Calculate Result" button to view the GPA and appreciation message.

### Appreciation Messages
The application displays an appreciation message based on the calculated GPA:

GPA ≥ 9: Outstanding! Keep up the excellent work!
GPA ≥ 8: Great job! You're doing very well!
GPA ≥ 7: Good job! Keep pushing forward!
GPA ≥ 6: Nice work! Keep improving!
GPA ≥ 5: You're doing okay, but there's room for improvement!
GPA < 5: Keep trying, and you'll get there!

### Contributing
If you want to contribute to this project, feel free to open issues or submit pull requests. Contributions are welcome!
