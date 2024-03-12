import React from "react";
import { Modal } from "antd";

const DiaglogBox = ({ open, onCancel, width, closeIcon = true, children }) => {
  return (
    <Modal
      centered
      width={width}
      open={open}
      closeIcon={closeIcon}
      footer={null}
      className={"diaglogBox"}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};

export default DiaglogBox;