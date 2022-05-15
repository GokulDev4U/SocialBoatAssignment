import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const VideoCard = ({ tags, heading, text, video }) => {
    // 
    return (
        <Card sx={{ minHeight: 350 }}>
            <CardMedia
                component="video"
                controls
                src={video}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tags.map(tag => (
                        <span sx={{ marginX: 2 }} key={tag}>{`#${tag}`}</span>
                    ))}
                </Typography>
                {/* <Typography gutterBottom variant="h5" component="div">
                    {text}
                </Typography> */}
            </CardContent>
        </Card>
    );
};

export default VideoCard;