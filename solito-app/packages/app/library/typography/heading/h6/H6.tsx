import * as React from "react";
import {Heading} from "@gluestack-ui/themed";
import H6Type from "./H6Type";


export default function H6(props: H6Type) {

    const headingSize = props.size === 'sm' ? 'xs' : 'sm';

    return (<Heading {...props} size={headingSize}>{props.children}</Heading>);
}