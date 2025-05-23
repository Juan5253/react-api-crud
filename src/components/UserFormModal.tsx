import React from "react";
import { User } from "../models/User";
import { UserForm } from "./UserForm";

interface Props {
  visible: boolean;
  userToEdit?: User | null;
  onSave: (user: Partial<User>) => void;
  onCancel: () => void;
}

export const UserFormModal: React.FC<Props> = ({ visible, userToEdit, onSave, onCancel }) => {
  if (!visible) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="userFormModalLabel"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userFormModalLabel">
              {userToEdit ? "Editar Usuario" : "Crear Usuario"}
            </h5>
            <button type="button" className="btn-close" onClick={onCancel} aria-label="Cerrar" />
          </div>
          <div className="modal-body">
            <UserForm
              onSave={onSave}
              onCancel={onCancel}
              userToEdit={userToEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};