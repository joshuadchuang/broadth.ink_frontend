import React from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import CustomButton from "../../../components/Common/Button.js";

function UserProfileCard() {
	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.",
	};

	return (
		<Card sx={{ maxWidth: 800, m: "auto", overflow: "visible" }}>
			{/* Top Section */}
			<Box
				sx={{
					bgcolor: "#9172EC",
					height: 100,
					textAlign: "center",
				}}></Box>

			{/* Avatar, positioned to overlap */}
			<Box sx={{ display: "flex", justifyContent: "center", mt: -7 }}>
				<Avatar sx={{ width: 112, height: 112, border: "5px solid #EDEAEA" }}>
					JD
				</Avatar>
			</Box>

			{/* Bottom Section */}
			<CardContent sx={{ p: 4, textAlign: "left" }}>
				<Typography
					gutterBottom
					variant='h5'
					component='div'
					textAlign='center'>
					{user.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					<strong>Email:</strong> {user.email}
				</Typography>
				<Typography variant='body2' color='text.secondary' sx={{ mt: 1 }}>
					<strong>Bio:</strong> {user.bio}
				</Typography>
			</CardContent>

			{/* Button to Edit Information */}
			<Box sx={{ display: "flex", justifyContent: "center", pb: 4 }}>
				<CustomButton
					mode='primary'
					text='Edit Information'
					onclick=''
					height='40px'
					width='170px'
					fontSize='14px'
					borderRadius='12px'></CustomButton>
			</Box>
		</Card>
	);
}

export default UserProfileCard;
