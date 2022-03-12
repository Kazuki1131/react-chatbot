import * as React from "react";
import List from "@mui/material/List";
import {Chat} from "./index";
import { styled } from "@mui/material/styles";

const CustomList = styled(List)({
    height: 400,
    padding: "0",
    overflow: "auto",
});

const Chats = (props) => {
    return (
        <CustomList id={"scroll-area"}>
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
            })}
        </CustomList>
    )
}

export default Chats
