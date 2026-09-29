import React from 'react';
import './UserCard.css';

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <h3 className="user-name">{user.name}</h3>
      <p className="user-company">🏢 {user.company}</p>

      <div className="user-details">
        <p className="detail-item"><strong>📧 Email:</strong> {user.email}</p>
        <p className="detail-item"><strong>📞 Phone:</strong> {user.phone}</p>
        <p className="detail-item"><strong>📍 City:</strong> {user.city}</p>
      </div>
    </div>
  );
}