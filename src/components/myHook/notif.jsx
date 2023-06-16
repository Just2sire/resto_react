import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotifContext = createContext();

const NotifProvider = ({ children }) => {
    const [notifContent, setNotifContent] = useState('');
  
    const showNotif = (content) => {
      setNotifContent(content);
    };
  
    const hideNotif = () => {
      setNotifContent('');
    };
  
    return (
      <NotifContext.Provider
        value={{
          notifContent,
          showNotif,
          hideNotif,
        }}
      >
        {children}
      </NotifContext.Provider>
    );
};

function App(){
    const notify = () => toast("Wow so easy!");

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
}

export { NotifContext, NotifProvider };