import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Button from '../components/Button';
import Toast from '../components/Toast';

export const SnackbarConfig: React.FC = () => {
	return <Toaster position='bottom-left' reverseOrder={false} toastOptions={{ duration: 10000 }} />;
};

export const SnackbarUtilities = {
	success: (mensaje: string) =>
		toast.custom(t => (
			<Toast color='green' message={mensaje}>
				<Button onClick={() => toast.dismiss(t.id)}></Button>
			</Toast>
		)),
	error: (mensaje: string) => toast.custom(t => <Toast color='green' message={mensaje}></Toast>),
};
