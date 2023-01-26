import React from 'react';
import ContainerComments from './components/ContainerComments';
import Modal from './components/Modal';
import './styles.css';
export default function App(): JSX.Element {
	return (
		<>
			<Modal
				title='pruenasa'
				content='lorem asjbdahgfdj fsgas fasg fahg fasg fjhasg '
				config={{
					textCancel: 'No, Cancel',
					textConfirm: 'Yes, Delete',
				}}
			></Modal>
			<ContainerComments></ContainerComments>;
		</>
	);
}
