import React, { useState, useEffect } from "react";
import { User } from "../models/User";

interface Props {
  onSave: (user: Partial<User>) => void;
  onCancel: () => void;
  userToEdit?: User | null;
}

export const UserForm: React.FC<Props> = ({ onSave, onCancel, userToEdit }) => {
  const [form, setForm] = useState<Partial<User>>({
    title: "",
    firstName: "",
    lastName: "",
    picture: "",
    gender: "",
    email: "",
    dateOfBirth: "",
    phone: "",
  });

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    } else {
      setForm({
        title: "",
        firstName: "",
        lastName: "",
        picture: "",
        gender: "",
        email: "",
        dateOfBirth: "",
        phone: "",
      });
    }
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="form-label">Título</label>
        <select
          name="title"
          className="form-select"
          value={form.title}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione...</option>
          <option value="mr">Sr.</option>
          <option value="ms">Sra.</option>
          <option value="miss">Srta.</option>
          <option value="mrs">Sra.</option>
          <option value="dr">Dr.</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={form.firstName || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={form.lastName || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Foto (URL)</label>
        <input
          type="text"
          className="form-control"
          name="picture"
          value={form.picture || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Género</label>
        <select
          name="gender"
          className="form-select"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione...</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={form.email || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          value={form.dateOfBirth || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Teléfono</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={form.phone || ""}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success me-2">Guardar</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
    </form>
  );
};