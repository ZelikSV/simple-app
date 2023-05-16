import React, {ChangeEvent} from 'react';
import {TextField as AntTextField} from "@mui/material";
import {TextFieldProps} from "@mui/material/TextField/TextField";

type Props = {
    defaultValue: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
} & TextFieldProps;

const TextField:React.FC<Props> = ({defaultValue, onChange, ...props}) => {
    return (<AntTextField defaultValue={defaultValue} onChange={onChange} {...props} />);
}

export default TextField;
