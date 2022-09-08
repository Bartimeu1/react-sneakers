import './App.scss';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import ProductsTable from './components/ProductsTable/ProductsTable';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Slider></Slider>
      <ProductsTable></ProductsTable>
    </div>
  );
}

export default App;
