import './App.css';
import Header from './components/Header/Header.js';
import MainBlock from './components/MainBlock/MainBlock.js';

function App(props) {
  return (
    <>
      <Header />
      <MainBlock userData={props.state.massegPage.userData} massegData={props.state.massegPage.massegData} profilePostsData={props.state.profilePage.profilePostsData} />
    </>
  );
}

export default App;
