import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";

function Mail() {
  const [emails, setEmails] = useState([]);
  const [needsLogin, setNeedsLogin] = useState(false);
  const API_BASE_URL = "https://famous-crossing-420503.wl.r.appspot.com"
  const fetchEmails = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/get_emails`, { withCredentials: true });
      setEmails(response.data.messages || []);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Not authenticated, prompt for login
        setNeedsLogin = true;
      } else {
        console.error('Error fetching emails:', error);
      }
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if (needsLogin) {
    return <Login />;
  }

  return (
    <div>
      <h1>My Emails</h1>
      {emails && emails.length > 0 ? (
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      ) : (
        <p>No emails found or not authenticated.</p>
      )}
    </div>
  );
}

export default Mail;