import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';
import Quizzes from "./pages/quizzes";
import NewQuiz from './pages/new-quiz';

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
          <Route path="/quiz/:id" element={<NewQuiz updateQuizzes={updateQuizzes} quizzes={quizzes} isEdit />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
