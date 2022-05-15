import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const VideoCard = ({ tags, heading, text, video }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="video"
                height="140"
                image={video}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tags.map(tag => (
                        <span sx={{ marginRight: 10 }} key={tag}>{tag}</span>
                    ))}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoCard;