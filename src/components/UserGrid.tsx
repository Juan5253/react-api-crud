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
  const [searchId, setSearchId] = useState("");

  const filteredUsers = searchId
    ? users.filter((user) =>
        user.id.toLowerCase().includes(searchId.toLowerCase())
      )
    : users;

  return (
    <section>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por ID de usuario"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          aria-label="Buscar usuario por ID"
        />
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col" className="text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {translateTitle(user.title, user.lastName)} {user.firstName}
                  </td>
                  <td>{user.email}</td>
                  <td className="text-center">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Acciones de usuario"
                    >
                      <button
                        className="btn btn-outline-info btn-sm"
                        onClick={() => onView(user.id)}
                        title="Ver"
                      >
                        <i className="bi bi-eye"></i>
                      </button>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => onEdit(user.id)}
                        title="Editar"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => onDelete(user.id)}
                        title="Eliminar"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-muted">
                  No se encontraron usuarios con ese ID.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-2 text-end text-muted">
        Total usuarios: {filteredUsers.length}
      </div>
    </section>
  );
};
