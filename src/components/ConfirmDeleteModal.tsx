import React from "react";

interface Props {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<Props> = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar Eliminación</h5>
            <button type="button" className="btn-close" onClick={onCancel} aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            <p>¿Está seguro de eliminar este usuario?</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
            <button className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};