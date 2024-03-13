import * as React from "react";
import {Avatar as AvatarBase} from "@gluestack-ui/themed";
import AvatarType from "./AvatarType";


export default function Avatar(props: AvatarType) {

    return (<AvatarBase {...props}>{props.children}</AvatarBase>);
}