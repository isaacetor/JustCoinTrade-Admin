import { createBrowserRouter } from 'react-router-dom';

import { lazy, Suspense } from 'react';

const DashboardLayout = lazy(
	() => import('../components/layout/dashboard-layout')
);
const HomePage = lazy(() => import('../Pages/Home'));
const UserProfile = lazy(() => import('../Pages/users/user-profile'));
const AllUsers = lazy(() => import('../Pages/users/all-users'));
const Login = lazy(() => import('../Pages/auth/Login'));
const PasswordReset = lazy(() => import('../Pages/auth/password-reset'));

const Index = createBrowserRouter([
	{
		path: 'auth',

		children: [
			{
				index: true,
				path: 'login',
				element: <Login />,
			},

			{
				path: 'password-reset',
				element: <PasswordReset />,
			},
		],
	},
	{
		path: '/',
		element: (
			<Suspense fallback={<p>loading...</p>}>
				<DashboardLayout />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: '/users',
		element: (
			<Suspense fallback={<p>loading...</p>}>
				<DashboardLayout />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: <AllUsers />,
			},

			{
				path: 'profile/:id',
				element: <UserProfile />,
			},
		],
	},

	{
		path: '*',
		element: (
			<>
				404! <br />
				page not found
			</>
		),
	},
]);

export default Index;
