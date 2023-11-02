import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import IconButton from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddBox from "@mui/icons-material/AddBox";

type PropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.addItem(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }
    const stylesButton = {
        maxWidth: '38px',
        maxHeight: '38px',
        minWidth: '38px',
        minHeight: '38px',
    }
    return (
        <div>
            <TextField
                size="small"
                variant="outlined"
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                label={error ? error : ""}
                error={!!error}
            />
            <IconButton variant="contained"
                    style={stylesButton}
                    onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>
    );
};

