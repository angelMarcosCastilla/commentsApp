import React from 'react';
import ContainerComments from './components/ContainerComments';
import Toast from './components/Toast';

import './styles.css';
import { SnackbarConfig } from './utils/Snackbar';
export default function App(): JSX.Element {
	return (
		<>
		<Toast message='prueba'/>
			<SnackbarConfig/>
			<ContainerComments></ContainerComments>;
		</>
	);
}
