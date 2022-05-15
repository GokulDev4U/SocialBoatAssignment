import React, { useState } from 'react';
import Box from '@mui/material/Box';
import VideoList from './VideoList';
import useFetch from './useFetch';
import NavBar from './NavBar';
import Result from './Result';

export default function Header() {
    const [search, setSearch] = useState('nature');
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



    const { data } = useFetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?&numResults=${results}&q=${search}`);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar setSearch={setSearch} search={search} />

            <Result setResults={setResults} results={results} />

            <VideoList fetchVideo={data} />
        </Box>
    );
}
