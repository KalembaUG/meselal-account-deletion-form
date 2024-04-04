import logo from './logo.svg';
import './App.css';
import ContactForm from './contactForm';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Request for Account Deletion</h1>
      </div>
      <div>
        <h3>
        Send a request to delete your account and personality identifiable information (PII) that is stored on our system. You will receive an email to verify your request. Once the request is varified we will take care of deleting your PII. If you just want to check what PII we have stored, you can request your data
        </h3>
      </div>
      <ContactForm/>

    </div>
  );
}

export default App;
