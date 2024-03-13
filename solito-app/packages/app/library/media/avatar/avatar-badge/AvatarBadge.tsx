import * as React from "react";
import {AvatarBadge as AvatarBadgeBase} from "@gluestack-ui/themed";
import AvatarBadgeType from "./AvatarBadgeType";


export default function AvatarBadge(props: AvatarBadgeType) {

    return (<AvatarBadgeBase {...props}>{props.children}</AvatarBadgeBase>);
}