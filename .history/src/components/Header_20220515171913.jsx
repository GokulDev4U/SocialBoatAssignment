import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import VideoList from './VideoList';
import useFetch from './useFetch';
import TextField from '@mui/material/TextField';




export default function Header() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('10');

    // const debounce = (func, delay) => {
    //     let debounceTimer;
    //     return function () {
    //         const context = this;
    //         const args = arguments;
    //         clearTimeout(debounceTimer);
    //         debounceTimer = setTimeout(() => func.apply(context, args), delay);
    //     };
    // };

    // const update = debounce(function (e) {
    //     setSearch(e.target.value);

    // }, 1000);

    const update = (e) => {
        setSearch(e.target.value);
    };

    const { data } = useFetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?&numResults=${results}&q=${search}`);


    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box sx={{ display: 'flex', justifyContent: "center", marginY: 5 }}>
                <TextField id="filled-basic" label="result"
                    onChange={(e) => setResults(e.target.value)} value={results} variant="filled" />
            </Box>

            <VideoList fetchVideo={data} />
        </Box>
    );
}
