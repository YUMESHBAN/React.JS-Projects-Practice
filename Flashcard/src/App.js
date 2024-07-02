import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="test">General Information on Yumesh Ban</h1>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What are Yumesh's Qualifications?",
    answer: "Currently enrolled in BSc.CSIT in Bhaktapur Multiple Campus",
  },
  {
    id: 2,
    question: "Does Yumesh has any experience in IT field?",
    answer: "Yes.Worked one year as freelancer in Graphic Design field",
  },
  {
    id: 3,
    question: "What knowledge set does Yumesh have in any IT Field?",
    answer: "Adequate knowledge in C , C++ and DSA",
  },
  {
    id: 4,
    question: "Does Yumesh have any skill for Graphic Designing?",
    answer:
      "Yes.Skilled in Adobe Photoshop and Illustrator with basic idea of Figma and Blender",
  },
  {
    id: 5,
    question: "What skill level does Yumesh have in React?",
    answer: "Desperate and Hardworking Learner",
  },
  {
    id: 6,
    question: "What are Yumesh's Soft Skills?",
    answer:
      "Strong communication skills, Teamwork, Problem-solving and Quick adaptability",
  },
];

function FlashCards() {
  const [selectid, setselectid] = useState(null);
  const colors = [
    "#ffa06b",
    "#ff6b6b",
    "#ffd43b",
    "#69db7c",
    "#6baffd",
    "#b06bff",
  ];
  function handleClick(id) {
    setselectid(id !== selectid ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question, index) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectid ? "selected" : ""}
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <p>
            {question.id === selectid ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
