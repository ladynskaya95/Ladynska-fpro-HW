import React from 'react'
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Box className="contacts">
      <table>
        <thead>
          <tr>
            <th className="name">Ім'я</th>
            <th className="username">Прізвище</th>
            <th className="phone">Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, idx) => (
            <tr key={contact.id || idx}>
              <td className="name">{contact.name}</td>
              <td className="username">{contact.username}</td>
              <td className="phone">{contact.phone}</td>
              <td>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Видалити
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

export default ContactsList