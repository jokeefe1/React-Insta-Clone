import React from "react";
import { StyledInput } from "./Input.styled";
import { Divider } from '../../App.GlobalSyles'

const Input = props => {
    return (
        <form onSubmit={props.add}>
            <div>
                <div>
                    <Divider />
                    <StyledInput type="text" placeholder="Add a comment ..." name="user" onChange={props.change} value={props.value} />
                </div>
            </div>
        </form>
    )
}

export default Input;