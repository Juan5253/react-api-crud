import React from "react";
import { User } from "../models/User";
import { translateTitle } from "../utils/translations";
import { getOnlyDate } from "../utils/getDate";

interface Props {
  user: User | null;
  onClose: () => void;
}

export const UserDetailModal: React.FC<Props> = ({ user, onClose }) => {
  if (!user) return null;
  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalle del Usuario</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>Nombre:</strong> {translateTitle(user.title, user.lastName)} {user.firstName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Género:</strong> {user.gender}</p>
            <p><strong>Fecha de nacimiento:</strong> {getOnlyDate(user.dateOfBirth)}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            {user.picture && (
              <img src={user.picture} alt="Foto de usuario" className="img-thumbnail" />
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};