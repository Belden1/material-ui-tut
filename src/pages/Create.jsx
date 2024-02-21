import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
	return (
		<Container>
			<Typography
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
				sx={{
					textDecoration: 'underline',
					marginBottom: 20
				}}
			>
				Create a new note
			</Typography>

			<Button
				onClick={() => console.log('you clicked me')}
				type="submit"
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRightIcon />}
				sx={{
					fontSize: 60,
					backgroundColor: 'violet',
					'&:hover': {
						backgroundColor: 'blue'
					}
				}}
			>
				Submit
			</Button>
			<br />
		</Container>
	);
}
