import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const skills = [
    {
        "skill": "HTML+CSS",
        "level": "advanced",
        "color": "#2662EA"
    },
    {
        "skill": "SCSS",
        "level": "advanced",
        "color": "orangered"
    },
    {
        "skill": "Bootstrap",
        "level": "intermediate",
        "color": "#260aaa"
    },
    {
        "skill": "JavaScript",
        "level": "advanced",
        "color": "#EFD81D"
    },
    {
        "skill": "React",
        "level": "advanced",
        "color": "#60DAFB"
    },
    {
        "skill": "Styled Components",
        "level": "beginner",
        "color": "#ff00ff"
    },
    {
        "skill": "Svelte",
        "level": "beginner",
        "color": "#FF3B00"
    },
    {
        "skill": "Web Design",
        "level": "advanced",
        "color": "#C3DCAF"
    },
    {
        "skill": "Git & GitHub",
        "level": "intermediate",
        "color": "#E84F33"
    },
    {
        "skill": "Node.js",
        "level": "beginner",
        "color": "#00ff00"
    },
    {
        "skill": "Express.js",
        "level": "beginner",
        "color": "#ff00ff"
    },
    {
        "skill": "PostgreSQL",
        "level": "beginner",
        "color": "#a4faff"
    },
];

function App() {
    return (
        <div className='card'>
            <Avatar />
            <div className='data'>
                < Intro />
                < SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img src="undefined - Imgur.png" alt="Imgur" className="avatar" />
    );
}

function Intro() {
    return (
        <div>
            <h1>OTTO VAN OTTO</h1>
            <p>Full-stack developer, Cybersecurity and Cloud lover, Embedded enthusiast and ML learner. When I am not sending binary digits, I love to tickle ivories and spend time playing arcarde games.</p>
        </div>
    );
}

function SkillList() {
    return (
        <div className='skill-list'>
            {skill.map((skill) => (
                <Skill skill={skill.skill} level={skill.level} color={skill.color} />
            ))}
        </div>
    );
}

function Skill({ skill, level, color }) {
    return (
        <div className='skill'>

        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
export default App;