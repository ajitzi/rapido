import * as React from "react";
import {BadgeIcon as BadgeIconBase} from "@gluestack-ui/themed";
import BadgeIconType from "./BadgeIconType";


export default function BadgeIcon(props: BadgeIconType) {

    return (<BadgeIconBase {...props}/>);
}