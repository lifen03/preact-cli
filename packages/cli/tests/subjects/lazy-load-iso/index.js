import { ErrorBoundary, lazy, Router } from 'preact-iso';

// Asynchronous, code-splitted:
const A = lazy(() => import('./a.js'));
const B = lazy(() => import('./b.js'));

export default function App() {
	return (
		<ErrorBoundary>
			<Router>
				<A path="/" />
				<B path="/b" />
			</Router>
		</ErrorBoundary>
	);
}
