import * as React from "react";
import {AccordionContentText as UIAccordionContentText} from "@gluestack-ui/themed";

export default function AccordionContentText({children, ...props}: React.ComponentProps<typeof UIAccordionContentText>) {

    return (
        <UIAccordionContentText {...props}>
            {children}
        </UIAccordionContentText>
    )
}