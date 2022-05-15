import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import VideoList from './VideoList';
import useFetch from './useFetch';
import TextField from '@mui/material/TextField';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

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
