import * as React from "react";
import {Link as LinkBase} from "@gluestack-ui/themed";
import LinkType from "./LinkType";


export default function Link(props: LinkType) {

    // @ts-ignore
    return <LinkBase {...props}>{props.children}</LinkBase>
}