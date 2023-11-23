import React from 'react'
import './Login.css'
function Login() {

    return (
        <form>
            <h3>Ducem Technolgy - Task</h3>
            <label htmlFor="username">Student Name</label>
            <input type="text" id="username" required />
            <br />
            <label htmlFor="mobile">Mobile No</label>
            <input type="number" id="mobile" required />
            <br />
            <label htmlFor="dob">Date of Birth</label>
            <input type="datetime-local" id="dob" required />
            <br />
            <label htmlFor="dot">Date & Time of Address</label>
            <input type="datetime-local" id="dot" required />
            <br />
            <label htmlFor="address">Student Address</label>
            <input type="text" id="address" required />
            <br />
            <label htmlFor="certificate">Birth Certificate Attachment</label>
            <input type="file" id="certificate" required />
            <br />
            <label htmlFor="subjects">Select Subjects (Minimum 4 Subjects Need to Select)</label>
            <select multiple={true} id="subjects" className='subject' required>
                <option value="subject1">Maths</option>
                <option value="subject2">Science</option>
                <option value="subject3">Gujarati</option>
                <option value="subject4">Hindi</option>
                <option value="subject5">English</option>
                <option value="subject6">Sanskrit</option>
                <option value="subject7">A - Group</option>
                <option value="subject8">B - Group</option>
            </select>
            <br />
            <button type="submit">Save</button>
        </form>
    )
}
export default Login