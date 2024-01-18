// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import RootLayout from './layouts/RootLayout';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const routesFromElements = createRoutesFromElements(
	<Route path="/" element={<RootLayout />}>
		<Route index element={<Notes />} />
		<Route path="create" element={<Create />} />
	</Route>
);

const router = createBrowserRouter(routesFromElements);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
