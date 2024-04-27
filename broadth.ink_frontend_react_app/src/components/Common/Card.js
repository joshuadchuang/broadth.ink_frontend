import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material-next/Chip";
import Stack from "@mui/material/Stack";

export default function ActionAreaCard({courseName, score, description, tags}) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image='https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png'
					alt='book'
				/>
				<CardContent>
					<Stack direction='row' spacing={1}>
                        {tags.map((tag, index) => (
                            // Assuming tag is a string
                            <Chip key={index} label={tag} size='medium' variant='filled' />
                        ))}
                    </Stack>
					<Typography gutterBottom variant='h5' component='div'>
						{courseName} {score}%
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Course Description: {description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}




// export default function ActionAreaCard({labels, course_name, description, percentage}) {
// 	return (
// 		<Card sx={{ maxWidth: 345 }}>
// 			<CardActionArea>
// 				<CardMedia
// 					component='img'
// 					height='140'
// 					image='https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png'
// 					alt='book'
// 				/>
// 				<CardContent>
// 					<Stack direction='row' spacing={1}>
// 						{labels.map ((index) => (
// 							<Chip label = {index} size = 'medium' variant = 'filled'/>
// 						))}
// 					</Stack>
// 					{percentage && (<Typography gutterBottom variant='h5' component='div'>
// 						{course_name}
// 					</Typography>) }
// 					<Typography gutterBottom variant='h5' component = 'div'> 
// 						{percentage}
// 					</Typography>
// 					<Typography variant='body2' color='text.secondary'>
// 						{description}
// 					</Typography>
					

				
// 				</CardContent>
// 			</CardActionArea>
// 		</Card>
// 	);
// }
