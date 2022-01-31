import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import IndexList from './pages/IndexList';
import {getGroup, getGroupIds} from './services/API';

export const Context = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    try {
      let res = [];
      getGroupIds()
        .then((data) => {
          data.forEach((id) =>
            getGroup(id).then((data) => {
              res.push(data);
              setGroup(res);
            })
          );
        })
        .finally(() => setLoading(false));
    } catch (err) {
      console.log(`Something went wrong: ${err}`);
    }
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

  return (
    <Context.Provider value={{group}}>
      <div className="App">
        <Header />
        <IndexList />
      </div>
    </Context.Provider>
  );
}

export default App;
