import * as React from "react";
import {Alert as AlertBase} from "@gluestack-ui/themed";
import AlertType from "./AlertType";


export default function Alert(props: AlertType) {

    // @ts-ignore
    return (<AlertBase {...props}>{props.children}</AlertBase>);
}