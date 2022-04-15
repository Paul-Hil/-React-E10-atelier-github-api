// == Import npm
import React, { useState, useEffect }  from 'react';
import { Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';

import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar'
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import FAQ from 'src/components/FAQ';

// == Import
import 'semantic-ui-css/semantic.min.css'
import './styles.scss';

// == Composant
const App = () => {  
  const [value, setValue] = useState('');

  const [countRepos, setCountRepos] = useState(0);

  const [results, setResults] = useState(false);

  const [perPage, setPerPage] = useState(9)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
     sendRequest();
  }, [perPage]);

  const sendRequest = () => {
    setLoading(true);

    axios({
      method: 'GET',
      baseURL: `https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc&page=1&per_page=${perPage}`
    })
    .then(function (response) {
      setResults(response.data.items)
      setCountRepos(response.data.total_count);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function(){
      setLoading(false);
    })
  }

  return (
    <div className="app">
      <Header />

      <Route path="/" exact>
        <SearchBar sendRequest={sendRequest} setValue={setValue} setPerPage={setPerPage}/>
      
        {results && <Message countResult={countRepos} /> }

        <div className="repos-list">

          {results &&
            results.map((result) => {
              //console.log(result);
              return(
                <ReposResults results={result} key={result.id}/> 
              )
            })}
            {results &&
              <button onClick={() => {
                setLoading(true);
                setPerPage(perPage + 9);
              }}>Plus de résultats</button>
            }

            {loading && (
              <Dimmer active>
               <Loader>Loading</Loader>
              </Dimmer>
            )}
        </div>
      </Route>

      <Route path="/faq">
          <FAQ />
      </Route>

    </div>
  ); 
}

// == Export
export default App;
