import React, { useState } from 'react';
import Box from '@mui/material/Box';
import VideoList from './VideoList';
import useFetch from './useFetch';
import NavBar from './NavBar';
import Result from './Result';
import CheckList from './CheckList';

export default function Header() {
    const [search, setSearch] = useState('nature');
    const [results, setResults] = useState('10');

    const { data } = useFetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?&numResults=${results}&q=${search}`);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar setSearch={setSearch} search={search} />

            <Result setResults={setResults} results={results} />

            <VideoList fetchVideo={data} />

            {/* <CheckList data={data} /> */}

        </Box>
    );
}
