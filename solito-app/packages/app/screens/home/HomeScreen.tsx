import * as React from 'react'
import {
    H1,
    Text,
    Card,
    Badge,
    BadgeIcon,
    BadgeText,
    Box,
    Center,
    VStack,
    HStack,
    Divider,
    Alert,
    AlertIcon,
    AlertText,
    Progress,
    ProgressFilledTrack,
    Spinner,
    Toast,
    ToastTitle,
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogCloseButton,
    ModalBackdrop,
    Modal,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Popover,
    PopoverBackdrop,
    PopoverContent,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
    TooltipText,
    TooltipContent,
    Tooltip,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionTitleText,
    AccordionIcon, AccordionContentText, AccordionContent
} from "app/components/library";

import GuestLayout from '../../layouts/GuestLayout'
import {
    AlertCircle,
    ArchiveIcon,
    Camera, ChevronDownIcon, ChevronUpIcon,
    FileWarning,
    GlobeIcon,
    MessageCircle, PaintBucket,
    PenTool, Plus,
    PuzzleIcon, SettingsIcon
} from "lucide-react-native";
import {View} from "react-native";
import {Button, ButtonText, CloseIcon, Icon, ToastDescription} from "@gluestack-ui/themed";


export default function HomeScreen() {

    const [progressValue, setProgressValue] = React.useState<number>(0)

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            // Incrémenter la valeur de progressValue
            setProgressValue((prevValue) => {
                // Si la valeur atteint 100%, arrêter l'intervalle
                if (prevValue === 100) {
                    clearInterval(intervalId);
                    console.log("Progress Bar complétée!");
                    return 100;
                }

                // Incrémenter la valeur de 1
                return prevValue + 1;
            });
        }, 100); // Interval de 500 millisecondes (0.5 secondes)

        // Nettoyer l'intervalle lorsqu'on quitte le composant
        return () => clearInterval(intervalId);
    }, []);

    return (
    <>
        <Center /*height={'$full'} sx={{_web: {height: '100vh'}}}*/>
            <Card>
                <H1 size={'sm'}>Hello</H1>
                <Text>World</Text>

                <VStack>
                    <Text>Truc… {progressValue}%</Text>
                    <Progress value={progressValue}>
                        <ProgressFilledTrack />
                    </Progress>
                    <HStack>
                        <Badge>
                            <BadgeText>API connexion …</BadgeText>
                        </Badge>
                        <Spinner />
                    </HStack>
                </VStack>

                <Badge>
                    <BadgeText mr={"auto"}>Hello</BadgeText>
                    <BadgeIcon as={Camera}/>
                </Badge>
            </Card>

        </Center>

        <Alert variant="accent" action={'error'}>
            <AlertIcon mr={"$4"} as={AlertCircle}/>
            <AlertText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ullam, voluptas. Adipisci architecto, aspernatur autem beatae doloremque nobis omnis quis rem. Aliquam aperiam doloremque eius fugiat harum illum in reprehenderit.</AlertText>
        </Alert>

        <Toast>
            <VStack space={'sm'} maxWidth={'100%'}>
                <ToastTitle>Hello</ToastTitle>
                <ToastDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur explicabo harum possimus praesentium quaerat saepe, sit! Aliquam assumenda repellat ullam. Eaque eum hic minus nisi quis! Amet at molestias nesciunt!</ToastDescription>
            </VStack>
        </Toast>

        <Tooltip placement={'right'} trigger={(triggerProps) => {
            return (
                <Button {...triggerProps}>
                    <ButtonText>Popover</ButtonText>
                </Button>
            )
        }}>
            <TooltipContent>
                <TooltipText>Hello, this is a tooltip !</TooltipText>
            </TooltipContent>
        </Tooltip>

        <Accordion
            m="$5"
            width="90%"
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
        >
            <AccordionItem value="a">
                <AccordionHeader>
                    <AccordionTrigger>
                        {({ isExpanded }) => {
                            return (
                                <>
                                    <AccordionTitleText>How do I place an order?</AccordionTitleText>
                                    {isExpanded ? (
                                        <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                    ) : (
                                        <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                    )}
                                </>
                            )
                        }}
                    </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    <AccordionContentText>
                        To place an order, simply select the products you want, proceed to
                        checkout, provide shipping and payment information, and finalize your
                        purchase.
                    </AccordionContentText>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
                <AccordionHeader>
                    <AccordionTrigger>
                        {({ isExpanded }) => {
                            return (
                                <>
                                    <AccordionTitleText>
                                        What payment methods do you accept?
                                    </AccordionTitleText>
                                    {isExpanded ? (
                                        <AccordionIcon as={ChevronUpIcon} ml="$3" />
                                    ) : (
                                        <AccordionIcon as={ChevronDownIcon} ml="$3" />
                                    )}
                                </>
                            )
                        }}
                    </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    <AccordionContentText>
                        We accept all major credit cards, including Visa, Mastercard, and
                        American Express. We also support payments through PayPal.
                    </AccordionContentText>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>
  )
}

