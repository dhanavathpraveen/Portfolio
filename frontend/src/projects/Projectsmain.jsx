import React from 'react';
import RightSection from './RightSection.jsx';
import LeftSection from './LeftSection.jsx';
import Heading from './Heading.jsx';

function Projectsmain() {
    return(
        <>
            <Heading />
            <LeftSection
                image="/sentimentprjt.svg"
                title="Sentiment Analysis Through WhatsApp Chatbot"
                technologies="Technologies: Python"
                description="Developed a real-time sentiment analysis system integrated with a WhatsApp chatbot to collect and
analyze customer feedback. The system uses Natural Language Processing (NLP) to classify messages as
positive, negative, or neutral, providing instant insights for businesses. It automates response generation,
enhances customer engagement, and supports data-driven decision-making through AI-powered feedback
analysis."
            />

            <RightSection
                image="/wanderlustprjt.svg"
                title="Wanderlust"
                technologies="Technologies: MERN Stack (MongoDB, Express.js, React.js, Node.js)"
                description="Wanderlust is a hotel booking web application developed to allow users to browse hotels and book stays
through a simple, user-friendly interface. The project focuses on providing a smooth booking experience
with efficient data handling and secure user interaction."
            />

            <LeftSection
                image="/hsptlmgmt.svg"
                title="Online Hospital Management and Assistance System"
                technologies="Technologies: HTML, CSS, Js, Python"
                description="Designed a web application to book doctor appointments and order medicines online to avoid long waits
by scheduling visits and get medicines delivered quickly. Added an automated chatbot to handle patient
queries and provide suggestions for appointments, prescriptions, and basic care guidance."
            />
        </>
    )
}

export default Projectsmain;
