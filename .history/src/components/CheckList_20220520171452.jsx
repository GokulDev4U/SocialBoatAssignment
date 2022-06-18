import { CheckBox } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

const CheckList = ({ tags }) => {
    const [filteredtags, setfilteredtags] = useState(false);
    return (
        <Box>
            {tags.map(tag => (
                <Typography key={tag}>
                    <CheckBox > {tag} </CheckBox>
                </Typography>
            )}
        </Box>
    );
};

export default CheckList;