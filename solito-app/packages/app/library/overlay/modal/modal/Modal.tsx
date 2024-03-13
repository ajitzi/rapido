import * as React from "react";
import {Modal as ModalBase} from "@gluestack-ui/themed";
import ModalType from "./ModalType";

export default function Modal(props: ModalType) {

    return (<ModalBase {...props}>{props.children}</ModalBase>);
}