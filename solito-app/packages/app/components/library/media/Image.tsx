import * as React from "react";
import {Image as UIImage} from "@gluestack-ui/themed";

export default function Image(props: React.ComponentProps<typeof UIImage>) {

    return (
        <UIImage {...props} />
    )
}