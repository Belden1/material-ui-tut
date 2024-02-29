import React from 'react';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { yellow, green, pink, blue } from '@mui/material/colors';

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor:
                  note.category === 'work'
                    ? yellow[700]
                    : note.category === 'money'
                    ? green[500]
                    : note.category === 'todos'
                    ? pink[500]
                    : blue[500]
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category.charAt(0).toUpperCase() + note.category.slice(1)}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
