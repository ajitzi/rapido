import * as React from "react";
import {Divider as UIDivider} from "@gluestack-ui/themed";

export default function Divider({...props}: React.ComponentProps<typeof UIDivider>) {

    return (<UIDivider {...props} />)
}