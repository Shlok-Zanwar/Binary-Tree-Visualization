import './App.css';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import BST from './Components/BST';


function BSTApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    useEffect(() => {
        enqueueSnackbar("This page is recommended to be used on desktop screen.", {
            variant: 'warning',
        });
    }, [])

    return (
        <div className="App">
            <BST />
        </div>
    );
}

export default BSTApp;
