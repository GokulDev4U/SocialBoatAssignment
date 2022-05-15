import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Result = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center", marginY: 5 }}>
            <TextField id="filled-basic" label="result"
                onChange={(e) => setResults(e.target.value)} value={results} variant="filled" />
        </Box>
    );
};

export default Result;