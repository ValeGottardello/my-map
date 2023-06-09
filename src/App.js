import CurrentLocation from './components/CurrentLocation';
import './App.css';
import Weather from './components/Weather';



function App() {

  return (
    <div className="App">
      <section className='wrapper'>
        <main>
          <CurrentLocation/>
        </main>
        <aside> 
          <Weather/>
        </aside>
      </section>
    </div>
  );
}

export default App;
