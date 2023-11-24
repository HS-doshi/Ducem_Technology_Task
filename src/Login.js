import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        dob: '',
        dot: '',
        address: '',
        certificate: '',
        subjects: [],
    });

    // Function to handle input changes!!
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };
    // Function to handle subject selection changes
    const handleSubjectChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
            option.value);

        // const selectedSubjectNames = selectedOptions.map((value) => {
        //     const option = e.target.querySelector(`[value="${value}"]`);
        //     return option ? option.textContent : '';
        // });

        setFormData((prevFormData) => ({
            ...prevFormData,
            subjects: selectedOptions,
        }));
        // console.log(JSON.stringify(selectedSubjectNames));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);

        //prepare data for API request.
        const apiData = {
            StudentName: formData.username,
            StudentAddress: formData.address,
            DOB: new Date(formData.dob).toISOString(),
            DateOfAdmission: new Date(formData.dot).toISOString(),
            MobileNo: formData.mobile,
            DOBCertificate: formData.certificate,
            AttachmentExt: '',
            subject: formData.subjects.map((subjectId) => ({
                subjectId: subjectId.toString(),
            })),
        };
        console.log('API Data - Response!', apiData);
        try {
            //Make API request
            const response = await fetch('http://angulartest.ducem.in/api/Candidate/SaveStudentDetails',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(apiData),
                });

            // Handle the response, we might want to check for success or handle error
            const result = await response.json();
            console.log(result);

            alert("Data has been send successfully!!")

        } catch (error) {
            console.log('Error while sending API request!', error);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3><strong>Ducem Technology - Task!</strong></h3>

            <label htmlFor='username'>Student Name</label>
            <input type='text' id='username' value={formData.username} onChange={handleInputChange} autoComplete='off' name='username' required />
            <br />

            <label htmlFor='mobile'>Mobile No</label>
            <input type='number' id='mobile' value={formData.mobile} onChange={handleInputChange} autoComplete='off' name='mobile' required />
            <br />

            <label htmlFor='dob'>Date Of Birth</label>
            <input type='datetime-local' id='dob' value={formData.dob} onChange={handleInputChange} autoComplete='off' name='dob' required />
            <br />

            <label htmlFor='dot'>Date & Time of Admission</label>
            <input type='datetime-local' id='dot' value={formData.dot} onChange={handleInputChange} autoComplete='off' name='dot' required />
            <br />

            <label htmlFor='address'>Student Address</label>
            <input type='text' id='address' value={formData.address} onChange={handleInputChange} autoComplete='off' name='address' required />
            <br />

            <label htmlFor='certificate'>Birth Certificate Attachment</label>
            <input type='file' id='certificate' value={formData.certificate} onChange={handleInputChange} autoComplete='off' name='certificate' required />
            <br />

            <label htmlFor='subjects'>Select Subjects (Minimum 4 Subjects Need to select)</label>
            <select multiple={true} id='subjects' className='subject' name='subject' value={formData.subjects} onChange={handleSubjectChange}>
                <option value="1">Maths</option>
                <option value="2">Science</option>
                <option value="3">English</option>
                <option value="4">Gujarati</option>
                <option value="5">N/A</option>
                <option value="6">PT</option>
                <option value="7">Hindi</option>
                <option value="8">Sanskrit</option>
            </select>
            <br />
            <button type='submit'><strong>Save</strong></button>
        </form>
    )
}

export default Login