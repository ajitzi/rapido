import * as React from "react";
import {ModalContent as ModalContentBase} from "@gluestack-ui/themed";
import ModalContentType from "./ModalContentType";

export default function ModalContent(props: ModalContentType) {

    return (<ModalContentBase {...props}>{props.children}</ModalContentBase>);
}