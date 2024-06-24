import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Index from './routes/AllRoutes';

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={Index} />
		</>
	);
};

export default App;
