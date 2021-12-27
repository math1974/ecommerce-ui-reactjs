import './App.css';
import './Position.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header'
import Footer from './Components/Footer'

// Pages
import Home from './Pages/Home';
import Login from './Pages/Login'

// Utils
import { get } from './Utils/Request';

// Contexts
import UserContext from './Contexts/User';
import { useEffect, useState } from 'react';

function App() {
	const info = localStorage.getItem('info');
	const userInfoLocalStorage = info && JSON.parse(info);
	const [userInfo, setUserInfo] = useState(userInfoLocalStorage);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (!token || userInfoLocalStorage) {
			if (!token) {
				setUserInfo(null);

				localStorage.removeItem('info');
			}

			return;
		}

		const getInfo = async () => {
			const response = await get({
				url: '/users'
			});

			updateUserInfo(response);
		};

		getInfo();
	}, [userInfoLocalStorage]);

	const updateUserInfo = data => {
		localStorage.setItem('info', JSON.stringify(data));

		setUserInfo(data);
	};

  	return (
    	<Router>
			<div className="flex-container">
				<div className="container__header">
					<UserContext.Provider value={userInfo}>
						<Header />
					</UserContext.Provider>
				</div>

				<div className="container__box">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>

				<Footer/>
			</div>
		</Router>
  	);
}

export default App;
