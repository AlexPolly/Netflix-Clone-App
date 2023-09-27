import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Rows from './components/Rows';
import requests from './requests';


function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Rows isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Rows title="Trending In India " fetchUrl={requests.fetchTrending} />
     <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  
  );
}

export default App;
