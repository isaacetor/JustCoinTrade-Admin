import { FC, PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router';

const AppScrollToTop: FC<PropsWithChildren> = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default AppScrollToTop;
