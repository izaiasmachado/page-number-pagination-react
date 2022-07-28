import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Books from './Books'
import Authorization from './Authorization';

function AppRoutes() {
  const Admin = Authorization(['admin']);
  const Manager = Authorization(['manager', 'admin']);
  const User = Authorization(['user', 'manager', 'admin']);

  const AdminComponent = () => <div>Admin</div>
  const ManagerComponent = () => <div>Manager</div>
  const UserComponent = () => <div>User</div>
  const LoginComponent = () => <div>Login</div>

  const AdminPage = Admin(AdminComponent)
  const ManagerPage = Manager(ManagerComponent)
  const UserPage = User(UserComponent)

  return (
    <Routes>
      <Route path="/login" element={<LoginComponent/>} />
      <Route path="/books" element={<Books/>} />

      <Route path="/admin" element={<AdminPage/>} />
      <Route path="/manager" element={<ManagerPage/>} />
      <Route path="/user" element={<UserPage/>}/>
    </Routes>
  );
}

export default AppRoutes