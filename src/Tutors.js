import React, { useState, useEffect } from 'react'

const TutorCard = tutor => (
    <div key={tutor._id} >
        <h2>{tutor.name}</h2>
        <button>Visit Page</button>
    </div >
)

const Tutor = () => {

    const [tutors, setTutors] = useState([]);

    async function getTutors() {
        let response = await fetch('http://localhost:8000/api/tutors')
        response = await response.json();
        // console.log(response);
        setTutors(response);
    }

    useEffect(() => {
        getTutors();
    }, []);

    return (
        <div>
            <h1>All Tutors</h1>
            <ul>
                {tutors.map(tutor => TutorCard(tutor))}
            </ul>
        </div>
    )
}

export default Tutor;