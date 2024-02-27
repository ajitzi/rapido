import * as React from "react";
import {Link as UILink} from "@gluestack-ui/themed";


type LinkProps = {
}

export default function Link({children, ...props}: React.ComponentProps<typeof UILink> & LinkProps) {

    return (
        <UILink {...props}>
            {children}
        </UILink>
    )
}