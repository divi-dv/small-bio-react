import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Node",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "CSS",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <img className="avatar" src="divi.jpg" alt="Divi" />
      <div className="data">
        <h2>Divyanshu Mishra</h2>
        <p>
          A React developer who likes to sing, play guitar, and workout in his
          free time.
        </p>
        <SkillList></SkillList>
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((cSkill) => (
        <Skill cSkill={cSkill} key={cSkill.skill} />
      ))}
    </div>
  );
}

function Skill({ cSkill }) {
  let emoji = "👶🏻";
  if (cSkill.level == "advanced") {
    emoji = "👴🏻";
  } else if (cSkill.level == "intermediate") {
    emoji = "👨🏻";
  }
  return (
    <div className="skill" style={{ backgroundColor: `${cSkill.color}` }}>
      <p>{cSkill.skill + emoji}</p>
    </div>
  );
}
