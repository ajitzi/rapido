import * as React from "react";
import {Heading} from "@gluestack-ui/themed";
import H2Type from "./H2Type";


export default function H2(props: H2Type) {

    return (<Heading {...props} size="2xl"> {props.children}</Heading>);
}