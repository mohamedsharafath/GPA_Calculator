#include <bits/stdc++.h>
using namespace std;

void displayEntries(const vector<pair<int, int>>& credits) {
    for (int i = 0; i < credits.size(); ++i) {
        cout << "Subject " << i + 1 << ": Credits = " << credits[i].first << ", Grade = " << credits[i].second << endl;
    }
}

void appreciateGPA(double GPA) {
    // Appreciation statement based on GPA classification
    cout << fixed << setprecision(2); // Set output to 2 decimal places

    if (GPA >= 9.0) {
        cout << "Congratulations! 🎉 Your GPA of " << GPA << " is outstanding! Keep up the amazing work!" << endl;
    } else if (GPA >= 8.0) {
        cout << "Wow! Your GPA of " << GPA << " is excellent! Keep striving for greatness!" << endl;
    } else if (GPA >= 7.0) {
        cout << "Great job! Your GPA of " << GPA << " is very good! Keep pushing yourself!" << endl;
    } else if (GPA >= 6.0) {
        cout << "Well done! Your GPA of " << GPA << " is good! Keep up the hard work!" << endl;
    } else if (GPA >= 5.0) {
        cout << "Good effort! Your GPA of " << GPA << " is average. Keep aiming higher!" << endl;
    } else {
        cout << "Keep working hard! Your GPA of " << GPA << " is below average. You can improve!" << endl;
    }
}

double calculateGPA(const vector<pair<int, int>>& credits) {
    double tot_credits = 0.0;
    double tot_grade = 0.0;
    double GPA = 0.0;

    // Calculate total grade points and credits
    for (int i = 0; i < credits.size(); ++i) {
        tot_credits += credits[i].first;
        tot_grade += credits[i].first * credits[i].second;
    }

    // Calculate GPA
    if (tot_credits != 0) {
        GPA = tot_grade / tot_credits;
    }

    return GPA;
}

int main() {

    int total_subj;
    cout << "Enter the total number of subjects: ";
    cin >> total_subj;

    vector<pair<int, int>> credits(total_subj);

    for (int i = 0; i < total_subj; ++i) {
        cout << "Enter the credits for subject " << i + 1 << ": ";
        cin >> credits[i].first;
        cout << "Enter the grade obtained for subject " << i + 1 << ": ";
        cin >> credits[i].second;
    }

    bool confirmed = false;

    while (!confirmed) {
        cout << "\nPlease confirm your entries:\n";
        displayEntries(credits);

        char confirmation;
        cout << "Are these entries correct? (y/n): ";
        cin >> confirmation;

        if (confirmation == 'y' || confirmation == 'Y') {
            confirmed = true;
        } else {
            int subject_num;
            cout << "Enter the subject number you need to change: ";
            cin >> subject_num;

            if (subject_num >= 1 && subject_num <= total_subj) {
                cout << "Enter the correct credits for subject " << subject_num << ": ";
                cin >> credits[subject_num - 1].first;
                cout << "Enter the correct grade for subject " << subject_num << ": ";
                cin >> credits[subject_num - 1].second;
            } else {
                cout << "Invalid subject number. Please try again.\n";
            }
        }
    }

    double GPA = calculateGPA(credits);

    appreciateGPA(GPA);

    return 0;
}
