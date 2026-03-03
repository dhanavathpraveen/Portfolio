import React from 'react';

function About() {
    return (
        <>
          <div className='about-container  mb-10'>
            <hr className='' />
            <h2 className=' aboutme text-4xl font-bold text-center mb-6 p-8'>About Me</h2>
            <div className=' flex items-center justify-center'>
                <div>
                  <p className='aboutmeP text-2xl leading-relaxed m-25 p-4 [word-spacing:3px] text-center '>
                        I am a B.Tech Computer Science student at MLR Institute of Technology, Hyderabad, and an aspiring Full Stack Developer focused on building scalable web applications. I continuously strengthen my problem-solving skills through Data Structures and Algorithms and Object-Oriented Programming concepts using Java while expanding my expertise in modern web technologies.
                    </p>
                </div>
            </div>
            <h2 className=' skills text-xl font-bold text-center m-10 p-5'>Skills</h2>
            <div className='mb-25'>
              <p className='aboutmeS text-2xl leading-relaxed m-15 p-4 [word-spacing:3px] text-center '>
                Full Stack Developer skilled in MERN stack development with a strong foundation in Data Structures & Algorithms and Object-Oriented Programming using Java. Familiar with cloud and DevOps fundamentals including AWS, Docker, Kubernetes, and CI/CD workflows, along with version control using Git and GitHub.
              </p>
            </div> 
          </div>
        </>
    )
}

export default About;