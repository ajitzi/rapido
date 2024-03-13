import * as React from "react";
import {AlertDialogBody as AlertDialogBodyBase} from "@gluestack-ui/themed";
import AlertDialogBodyType from "./AlertDialogBodyType";

export default function AlertDialogBody(props: AlertDialogBodyType) {

    return (<AlertDialogBodyBase {...props}>{props.children}</AlertDialogBodyBase>);
}