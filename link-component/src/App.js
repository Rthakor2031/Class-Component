import './App.css';
import Home from './Class-comp/Home'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div className='logo' style={{marginTop:'10px'}}>
            <img src='https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' alt='logo'></img>
            </div>
            <Home/>
          </div>
      </div>
        <div className='img-bg'>
          <img src='https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_6329bd10e533fae92713c5cf_Methods_for_Conditional_Rendering_in_React_Main_Image_5bc5a6891e.jpg'></img>
        </div>

        <div>
            <article style={{paddingTop:'10px',width:'80%',margin:'auto'}}>
            React: React is the clear winner here as it has always maintained more popularity on average than Angular. It gives the advantage of rendering optimizations, virtual DOM, and easy migration between versions. Moreover, it has the simplest ways to reuse the UI components, offering an easy way to get tasks done.
            </article>
        </div>

    </div>
  );
}

export default App;
