import * as React from "react";
import {AccordionIcon as UIAccordionIcon} from "@gluestack-ui/themed";

export default function AccordionIcon({...props}: React.ComponentProps<typeof UIAccordionIcon>) {

    return (
        <UIAccordionIcon {...props}/>
    )
}