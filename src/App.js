import './homepage/home.css';
import Homepagecontent from './Homepagecontent';
import Fightclub from './fightclub/fightclubpage'
import {Route,Routes} from 'react-router-dom'
import Pk from './pk/pkpage'
import Kantara from './kantara/kantarapage'
import Lucifer from './lucifer/luciferpage'
import Transformer from './transformers/transformerspage'
import Maruthu from './maruthu/maruthupage'
import Tamilpage from './language/tamilpage';
import Englishpage from './language/englishpage'
function App() {
  return (
    <>
    <Routes>
        <Route Component={Homepagecontent} path='/'></Route>
        <Route Component={Fightclub} path='/fight'></Route>
        <Route Component={Pk} path='/pk'></Route>
        <Route Component={Kantara} path='/kantara'></Route>
        <Route Component={Lucifer} path='/lucifer'></Route>
        <Route Component={Transformer} path='/transformer'></Route>
        <Route Component={Maruthu} path='/maruthu'></Route>\
        <Route Component={Tamilpage} path='/tamil'></Route>
        <Route Component={Englishpage} path='/english'></Route>
    </Routes>
    </>
  );
}

export default App;
