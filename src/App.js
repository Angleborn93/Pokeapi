import './styles/App.scss';
import Header from './components/header';
import Homepage from './pages/Homepage.js';
import Pokemon from './pages/Pokemon.js';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />

			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/pokemon/:id' element={<Pokemon />} />
			</Routes>
		</div>
	);
}

export default App;
