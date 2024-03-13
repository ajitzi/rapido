import * as React from "react";
import {LinkText as LinkTextBase} from "@gluestack-ui/themed";
import LinkTextType from "./LinkTextType";


export default function LinkText(props: LinkTextType) {

    return <LinkTextBase {...props}>{props.children}</LinkTextBase>
}