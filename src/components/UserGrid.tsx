import React, { useState } from "react";
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
}) => {
  const [searchId, setSearchId] = useState<string>("");

  const filteredUsers = searchId
    ? users.filter((user) =>
        user.id.toLowerCase().includes(searchId.toLowerCase())
      )
    : users;
  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por ID de usuario"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {translateTitle(user.title, user.lastName)} {user.firstName}
                </td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm mx-1"
                    onClick={() => onView(user.id)}
                  >
                    Ver
                  </button>
                  <button
                    className="btn btn-primary btn-sm mx-1"
                    onClick={() => onEdit(user.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => onDelete(user.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center">
                  No se encontraron usuarios con ese ID.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <span>Total usuarios: {filteredUsers.length}</span>
        </div>
      </div>
    </div>
  );
};