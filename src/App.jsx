import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';
import Quizzes from "./pages/quizzes";
import NewQuiz from './pages/new-quiz';
import Questions from "./pages/questions";

//* Some TODOs to enhance the app:
// TODO: Add validations to form of create / edit quiz
// TODO: Enhance the UI and add some colors
// TODO: Add eslint to standardize the code

//! The task description did not mention what to do with youtube URL

function App() {
  const [quizzes, setQuizzes] = useState([]);

  const updateQuizzes = (newQuiz, quizId, isEdit) => {
    if (isEdit) {
      const _quizzes = [...quizzes];
      const quizIndex = _quizzes.findIndex(quiz => quiz.id === quizId);
      _quizzes[quizIndex] = { ...newQuiz, modified: new Date().toLocaleString() };
      return setQuizzes(_quizzes);
    }
    setQuizzes(quizzes => [...quizzes, newQuiz]);
  };

  return (
    <section className="my-5">
      <Router>
        <Routes>
          <Route path="/" exact element={<Quizzes quizzes={quizzes} />} />
          <Route path="/new-quiz" element={<NewQuiz updateQuizzes={updateQuizzes} />} />
          <Route path="/quiz/:id" exact element={<NewQuiz updateQuizzes={updateQuizzes} quizzes={quizzes} isEdit />} />
          <Route path="/quiz/:id/questions" element={<Questions quizzes={quizzes} />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
