import * as React from "react";
import {AvatarGroup as AvatarGroupBase} from "@gluestack-ui/themed";
import AvatarGroupType from "./AvatarGroupType";


export default function AvatarGroup(props: AvatarGroupType) {

    return (<AvatarGroupBase {...props}>{props.children}</AvatarGroupBase>);
}