import * as React from "react";
import {Heading} from "@gluestack-ui/themed";

type H6Props = {
    size?: 'md' | 'sm';
};

export default function H6({size, children, ...props}: React.ComponentProps<typeof Heading> & H6Props) {

    const headingSize = size === 'sm' ? 'xs' : 'sm';

    return (
        <Heading {...props} size={headingSize}>
            {children}
        </Heading>
    )
}