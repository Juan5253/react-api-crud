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
    <div
      className="modal show d-block"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="userDetailModalLabel"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userDetailModalLabel">Detalle del Usuario</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Cerrar"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-4 text-center mb-3">
                {user.picture && (
                  <img
                    src={user.picture}
                    alt={`Foto de ${user.firstName}`}
                    className="img-fluid rounded"
                  />
                )}
              </div>
              <div className="col-md-8">
                <p><strong>Id:</strong> {user.id}</p>
                <p><strong>Nombre:</strong> {translateTitle(user.title, user.lastName)} {user.firstName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Género:</strong> {user.gender}</p>
                <p><strong>Fecha de nacimiento:</strong> {getOnlyDate(user.dateOfBirth)}</p>
                <p><strong>Teléfono:</strong> {user.phone}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};