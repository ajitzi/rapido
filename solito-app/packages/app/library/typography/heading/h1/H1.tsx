import * as React from "react";
import {Heading} from "@gluestack-ui/themed";
import H1Type from "./H1Type";


export default function H1(props: H1Type) {

    let headingSize;
    switch (props.size) {
        case 'lg':headingSize = '5xl'; break;
        case 'md':headingSize = '4xl'; break;
        case 'sm':headingSize = '3xl'; break;
        default: headingSize = '4xl'
    }

    return (<Heading {...props} size={headingSize}> {props.children} </Heading>);
}