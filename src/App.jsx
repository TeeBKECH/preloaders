import { React } from 'react';
import s from './App.module.scss';
import { Container } from './Components/Container/Container';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
