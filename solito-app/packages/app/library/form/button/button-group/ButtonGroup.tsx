import * as React from "react";
import {ButtonGroup as ButtonGroupBase} from "@gluestack-ui/themed";
import ButtonGroupType from "./ButtonGroupType";


type ButtonGroupProps = {
}

export default function ButtonGroup(props: ButtonGroupType) {

    // @ts-ignore
    return (<ButtonGroupBase {...props}>{props.children}</ButtonGroupBase>);
}