import * as React from "react";
import {Badge as BadgeBase} from "@gluestack-ui/themed";
import BadgeType from "./BadgeType";


export default function Badge(props: BadgeType) {

    return (<BadgeBase {...props as any}>{props.children}</BadgeBase>);
}