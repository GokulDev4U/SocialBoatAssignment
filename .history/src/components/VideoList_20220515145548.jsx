import React from 'react';
import VideoCard from './VideoCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const VideoList = ({ fetchVideo }) => {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                {fetchVideo.map(res => (
                    <Grid key={res.id} item xs={12} md={6} lg={4}>
                        <VideoCard video={res.video} heading={res.heading} tags={res.tags} text={res.text} />
                    </Grid>
                )
                )}
            </Grid>
        </Container>
    );
};

export default VideoList;