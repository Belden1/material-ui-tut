import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }

    if (details === '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };

  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom sx={{}}>
        Create a new note
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          sx={{
            marginTop: 3,
            marginBottom: 3,
            display: 'block'
          }}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          minRows={4}
          fullWidth
          required
          error={detailsError}
          sx={{
            marginTop: 3,
            marginBottom: 3,
            display: 'block'
          }}
        />

        <FormControl
          sx={{
            marginTop: 3,
            marginBottom: 3,
            display: 'block'
          }}
        >
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio color="secondary" />} label="Money" />
            <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio color="secondary" />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio color="secondary" />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" color="secondary" variant="contained" endIcon={<KeyboardArrowRightIcon />} sx={{}}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}
