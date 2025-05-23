import React, { useEffect, useState } from "react";
import { User } from "./models/User";
import {
  getUsers,
  deleteUser,
  getUserById,
  createUser,
  updateUser,
} from "./api/userApi";
import { UserGrid } from "./components/UserGrid";
import { UserDetailModal } from "./components/UserDetailModal";
import { ConfirmDeleteModal } from "./components/ConfirmDeleteModal";
import { UserFormModal } from "./components/UserFormModal";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (e) {
      alert("Error al cargar los usuarios.");
    }
  };

  const handleView = async (id: string) => {
    try {
      const user = await getUserById(id);
      setSelectedUser(user);
    } catch (e) {
      alert("Error al consultar usuario.");
    }
  };

  const handleDelete = (id: string) => {
    setUserIdToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (userIdToDelete) {
      try {
        await deleteUser(userIdToDelete);
        setShowDeleteModal(false);
        fetchUsers();
      } catch (e) {
        alert("Error al eliminar el usuario.");
      }
    }
  };

  const handleEdit = async (id: string) => {
    try {
      const user = await getUserById(id);
      setUserToEdit(user);
      setShowUserForm(true);
    } catch (e) {
      alert("Error al cargar usuario para editar.");
    }
  };

  const handleCreate = () => {
    setUserToEdit(null);
    setShowUserForm(true);
  };

  const handleSaveUser = async (userData: Partial<User>) => {
    try {
      if (userToEdit && userToEdit.id) {
        await updateUser(userToEdit.id, userData);
      } else {
        await createUser(userData);
      }
      setShowUserForm(false);
      fetchUsers();
    } catch (e) {
      alert("Error al guardar usuario.");
    }
  };

  return (
    <div className="container py-4">
      <h1>Gestión de Usuarios</h1>

      <div className="mb-3 d-flex justify-content-between align-items-center">
        <button className="btn btn-success" onClick={handleCreate}>
          Crear Usuario
        </button>
        <strong>Total usuarios: {users.length}</strong>
      </div>

      <UserFormModal
        visible={showUserForm}
        userToEdit={userToEdit}
        onSave={handleSaveUser}
        onCancel={() => setShowUserForm(false)}
      />

      <UserGrid
        users={users}
        onView={handleView}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <UserDetailModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />

      <ConfirmDeleteModal
        visible={showDeleteModal}
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default App;