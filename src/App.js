import { ChatEngine } from "react-chat-engine";

import ChatFeed  from "./components/ChatFeed";
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'f329a705-b06f-4dd7-af36-aa9c9a4b5197';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      
    />
  );
};

export default App;