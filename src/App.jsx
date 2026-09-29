import React, { useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

// Pakistani Users Mock Data
const pakistaniUsers = [
  { id: 1, name: 'Hafsa Abrar', email: 'hafsa.abrar@gmail.com', phone: '0300-1234567', company: 'Nur Al Khatt', city: 'Islamabad' },
  { id: 2, name: 'Moaaz Bin Abrar', email: 'moaaz.abrar@gmail.com', phone: '0312-9876543', company: 'Tech Solutions PK', city: 'Rawalpindi' },
  { id: 3, name: 'Ayesha Khan', email: 'ayesha.khan@yahoo.com', phone: '0321-4567890', company: 'Creative Studio', city: 'Lahore' },
  { id: 4, name: 'Hamza Ahmed', email: 'hamza.ahmed@gmail.com', phone: '0333-1122334', company: 'Devs Pakistan', city: 'Karachi' },
  { id: 5, name: 'Zainab Bibi', email: 'zainab.bibi@outlook.com', phone: '0345-5566778', company: 'Digital Arts PK', city: 'Peshawar' },
  { id: 6, name: 'Usman Ali', email: 'usman.ali@hotmail.com', phone: '0301-9988776', company: 'CodeHub PK', city: 'Multan' }
];

export default function App() {
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const filteredUsers = pakistaniUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="wrapper">
        
        <header className="header">
          <h2>👥 Pakistani User Directory</h2>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <input
          type="text"
          className="search-input"
          placeholder="Search by Pakistani name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="users-grid">
          {filteredUsers.length === 0 ? (
            <p className="status-msg" style={{ gridColumn: '1 / -1' }}>
              Koi matching user nahi mila.
            </p>
          ) : (
            filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))
          )}
        </div>

      </div>
    </div>
  );
}