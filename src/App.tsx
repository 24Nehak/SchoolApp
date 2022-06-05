import './App.css';
import RouterComponent from './router/RouterComponent';

declare global {
  interface Window{
    onUserSnapCXLoad: unknown;
  }
}

function App() {
  return (<RouterComponent />  );
}

export default App;
