import * as React from "react";
import {AvatarImage as UIAvatarImage} from "@gluestack-ui/themed";

export default function AvatarImage(props: React.ComponentProps<typeof UIAvatarImage>) {

    return (
        <UIAvatarImage {...props} />
    )
}