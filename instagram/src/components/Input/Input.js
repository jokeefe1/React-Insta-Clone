import React from "react";

const Input = props => {
    return (
        <form onSubmit={props.add}>
            <div>
                <div>
                    <input type="text" placeholder="Add a comment ..." name="user" onChange={props.change} value={props.value} />
                </div>
            </div>
        </form>
    )
}

export default Input;