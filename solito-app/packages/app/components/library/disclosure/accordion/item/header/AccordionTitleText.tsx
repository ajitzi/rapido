import * as React from "react";
import {AccordionTitleText as UIAccordionTitleText} from "@gluestack-ui/themed";

export default function AccordionTitleText({children, ...props}: React.ComponentProps<typeof UIAccordionTitleText>) {

    return (
        <UIAccordionTitleText {...props}>
            {children}
        </UIAccordionTitleText>
    )
}