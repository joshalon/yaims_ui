import React, { useEffect } from "react";
import axios from 'axios';
import { google } from 'googleapis';

const Mail = () => {
  useEffect(() => {
    const fetchCredentialsAndListMessages = async () => {
      try {
        // Step 1: Fetch the credentials from your Python server
        const response = await axios.get('https://famous-crossing-420503.wl.r.appspot.com/get_credentials');
        const { credentials } = response.data;

        if (!credentials) {
          console.error('No credentials returned from the server');
          return;
        }

        // Step 2: Setup the Google OAuth2 client
        const { client_id, client_secret, refresh_token } = JSON.parse(credentials);
        const oauth2Client = new google.auth.OAuth2(
          client_id,
          client_secret
        );

        oauth2Client.setCredentials({
          refresh_token: refresh_token
        });

        // Step 3: Initialize Gmail API client
        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

        // Fetch messages
        const res = await gmail.users.messages.list({
          userId: 'me',
          labelIds: ['INBOX'],
          maxResults: 10
        });

        const messages = res.data.messages;
        if (!messages || messages.length === 0) {
          console.log('No messages found.');
          return;
        }

        console.log('Messages:');
        messages.forEach((message) => {
          console.log(`- Message ID: ${message.id}`);
        });

      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchCredentialsAndListMessages();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
    </div>
  );
};

export default Mail;