import React from "react";

interface ConfirmDeleteModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  visible,
  title = "Confirmar Eliminación",
  message = "¿Está seguro de eliminar este usuario?",
  confirmText = "Eliminar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmModalLabel"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="confirmModalLabel">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Cerrar"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-danger" onClick={onConfirm}>{confirmText}</button>
            <button className="btn btn-secondary" onClick={onCancel}>{cancelText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};