import React from "react";
import { User } from "../models/User";
import { translateTitle } from "../utils/translations";

interface UserGridProps {
  users: User[];
  onView: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export const UserGrid: React.FC<UserGridProps> = ({
  users,
  onView,
  onDelete,
  onEdit,
}) => (
  <div className="table-responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{translateTitle(user.title, user.lastName)} {user.firstName}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-info btn-sm mx-1" onClick={() => onView(user.id)}>
                Ver
              </button>
              <button className="btn btn-primary btn-sm mx-1" onClick={() => onEdit(user.id)}>
                Editar
              </button>
              <button className="btn btn-danger btn-sm mx-1" onClick={() => onDelete(user.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      <span>Total usuarios: {users.length}</span>
    </div>
  </div>
);