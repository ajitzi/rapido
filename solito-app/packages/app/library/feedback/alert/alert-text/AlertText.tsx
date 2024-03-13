import * as React from "react";
import {AlertText as AlertTextBase} from "@gluestack-ui/themed";
import AlertTextType from "app/library/feedback/alert/alert-text/AlertTextType";


export default function AlertText(props: AlertTextType) {

    return (
        <AlertTextBase {...props}>{props.children}</AlertTextBase>
    )
}