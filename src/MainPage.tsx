import logo from './logo.svg';

export interface IMainPageProps {
  showForm: () => void;
}

export const MainPage = ({ showForm }: IMainPageProps) => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>Welcome to the rugged frontend</p>
      <button onClick={showForm}>Go To Rugged Form</button>
    </>
  );
};
