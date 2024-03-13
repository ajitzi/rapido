import * as React from "react";
import {BadgeText as BadgeTextBase} from "@gluestack-ui/themed";
import BadgeTextType from "./BadgeTextType";


export default function Badge(props: BadgeTextType) {

    return (<BadgeTextBase {...props}>{ props.children }</BadgeTextBase>);
}