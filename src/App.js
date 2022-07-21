import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route index element={ <ItemListContainer/> } />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id/item/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <Error404/>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
