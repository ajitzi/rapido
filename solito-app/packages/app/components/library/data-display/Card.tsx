import * as React from "react";
import {Card as UICard} from "@gluestack-ui/themed";

export default function Card({children, ...props}: React.ComponentProps<typeof UICard>) {

    return (
        <UICard {...props}>
            {children}
        </UICard>
    )
}