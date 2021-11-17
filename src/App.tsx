import './App.css';
import { useState } from 'react';
import { MainPage } from './MainPage';
import { MainForm } from './MainForm';
import { Success } from './Success';
import { Failure } from './Failure';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  return (
    <div className="App">
      {!showForm && !showSuccess && !showFailure && <MainPage showForm={() => setShowForm(true)} />}
      {showForm && (
        <MainForm
          showSuccess={() => {
            setShowSuccess(true);
            setShowForm(false);
          }}
          showFailure={() => {
            setShowFailure(true);
            setShowForm(false);
          }}
        />
      )}
      {showSuccess && <Success />}
      {showFailure && <Failure />}
    </div>
  );
}

export default App;
