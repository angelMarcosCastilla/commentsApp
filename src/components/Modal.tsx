import React from 'react';
import WithPortal from '../HOC/WithPortal';
import Button from './Button';

interface config {
  textConfirm?: string;
  textCancel?: string;

}
interface ModalProps {
	title: string;
  content: string;
  config?:config 
}

const Modal: React.FC<ModalProps> = ({ title, content,config }) => {
  
	return (
		<div className='modalContainer'>
			<div className='modal'>
				<header className='modal__title'>{title}</header>
				<div className='modal__content'>
          <p>{content}</p>
        </div>
				<footer className='modal__footer'>
          <Button size='large' color='neutro'>
            {config?.textCancel ?? 'Cancel'}
          </Button>
          <Button color='error' size='large'>
            {
              config?.textConfirm ?? 'Confirm'
            }
          </Button>
        </footer>
			</div>
		</div>
	);
};

export default WithPortal(Modal as any, 'modal');
