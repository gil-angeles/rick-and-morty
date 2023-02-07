import React, {useState} from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from "../Reducer/SelectPageReducer";
import { RootState } from "../Store/store";


const PaginationComponent = () => {
    const dispatch = useDispatch();
    const totalPages = useSelector((state: RootState)=> state.pagination.count)
    const [newPage, setNewPage] = useState(totalPages);
    
    const handleChange = (event: any, page: number) => {        
        dispatch(setCurrentPage(page));        
    }

    return (
        <div style={{display: "flex", alignItems: "center", marginTop: 40, justifyContent: "center"}}>
            <Stack spacing={2}>
                <Pagination count={totalPages} variant="outlined" color="primary" onChange={handleChange} />
            </Stack>
        </div>
    )
}

export default PaginationComponent;