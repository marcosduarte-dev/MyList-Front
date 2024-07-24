"use client";

import { Button, Modal } from "antd";
import React, { useState } from "react";

const TiposModal = (selectedRowKeys: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-end mt-3">
        <Button
          style={{ background: 'var(--green-create-button)' }}
          size="large"
          type="primary"
          onClick={() => 
             setModalOpen(true)
          }
        >
          Criar
        </Button>
      </div>
      <div>
        <Modal
          title="Criar um novo tipo"
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          okText="Criar"
          okButtonProps={{ style: { background: 'var(--green-create-button)' } }}
          cancelText="Cancelar"
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    </div>
  );
};

export default TiposModal;
