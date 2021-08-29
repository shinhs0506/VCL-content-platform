import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import {
  ValidModalKey,
  selectModal,
  appActions,
} from '@redux/generics/AppRedux';
import './Modal.css';

interface ModalWrapperProps {
  key: ValidModalKey;
  name: string;
  children: React.ReactElement<any>;
  disableDefaultClose?: boolean;
}

const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  const dispatch = useDispatch();

  const { visible, data } = useSelector(selectModal(props.key));

  const handleClose = () => {
    dispatch(appActions.closeModal({ key: props.key }));
  };

  return (
    <Modal
      open={visible}
      className={`web-app-modal ${props.name}-modal`}
      onClose={props.disableDefaultClose ? () => {} : handleClose}>
      {React.cloneElement(props.children, { modalData: data, handleClose })}
    </Modal>
  );
};

export default ModalWrapper;
