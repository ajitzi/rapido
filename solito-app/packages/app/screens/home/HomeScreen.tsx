import * as React from 'react'
import {
    H1,
    Text,
    Card,
    Badge,
    BadgeIcon,
    BadgeText,
    Image,
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
    Icon,
    TooltipText,
    TooltipContent,
    Tooltip,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionTitleText,
    AccordionIcon,
    AccordionContentText,
    AccordionContent,
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    Fab,
    FabLabel,
    FabIcon,
    ToastDescription,
    Button,
    ButtonText,
    CheckboxGroup,
    Checkbox,
    CheckboxIcon,
    CheckboxLabel,
    CheckboxIndicator,
    LinkText,
    RadioIndicator,
    RadioLabel,
    RadioIcon,
    RadioGroup,
    Radio,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Switch,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Textarea,
    TextareaInput,
    FormControlHelper, FormControlHelperText
} from "app/components/library";

import GuestLayout from '../../layouts/GuestLayout'
import {
    AlertCircle,
    ArchiveIcon,
    Camera, CheckCheck, CheckCheckIcon, CheckSquare, ChevronDownIcon, ChevronUpIcon, CircleIcon,
    FileWarning,
    GlobeIcon, LucideCheck,
    MessageCircle, PaintBucket,
    PenTool, Phone, Plus,
    PuzzleIcon, SettingsIcon, Star
} from "lucide-react-native";
import {View} from "react-native";
import {Link, TextLink} from "solito/link";

export default function HomeScreen() {

    const [progressValue, setProgressValue] = React.useState<number>(0)
    const [values, setValues] = React.useState("Eng")

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

        <Avatar>
            <AvatarFallbackText>Ajitzi Carmona</AvatarFallbackText>
            <AvatarImage
                source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                }}
            />
        </Avatar>

        <HStack space={'md'}>
            <Icon as={Phone} />
            <Text>+33650693228</Text>
        </HStack>

        <Image
            size="2xl"
            alt={'test'}
            source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3400&q=80",
            }}
        />

        <Button>
            <ButtonText>
                Hello
            </ButtonText>
        </Button>

        {/*<CheckboxGroup
            value={values}
            onChange={(keys) => {
                setValues(keys)
            }}
        >
            <VStack space="3xl">
                <Checkbox value="Eng">
                    <CheckboxIndicator mr="$2">
                        <CheckboxIcon as={LucideCheck} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Framer</CheckboxLabel>
                </Checkbox>
                <Checkbox value="invison">
                    <CheckboxIndicator mr="$2">
                        <CheckboxIcon as={LucideCheck} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Invision Studio</CheckboxLabel>
                </Checkbox>
                <Checkbox value="adobe">
                    <CheckboxIndicator mr="$2">
                        <CheckboxIcon as={LucideCheck} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Adobe XD</CheckboxLabel>
                </Checkbox>
            </VStack>
        </CheckboxGroup>*/}

        <Fab>
            <FabIcon as={Star} />
            <FabLabel>FAB</FabLabel>
        </Fab>


        <Link href={"/"}>
            <LinkText>Hello</LinkText>
        </Link>

        <RadioGroup value={values} onChange={setValues}>
            <VStack space="sm">
                <Radio value="Eng">
                    <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>English</RadioLabel>
                </Radio>
                <Radio value="Fre">
                    <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>French</RadioLabel>
                </Radio>
                <Radio value="Ger">
                    <RadioIndicator mr="$2">
                        <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>German</RadioLabel>
                </Radio>
            </VStack>
        </RadioGroup>

        <Slider
            defaultValue={30}
            size="md"
            orientation="horizontal"
            isDisabled={false}
            isReversed={false}
        >
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>

            <SliderThumb />
        </Slider>

        <HStack space="md">
            <Switch />
            <Text size="sm">Allow notifications</Text>
        </HStack>

        <FormControl>
            <FormControlLabel>
                <FormControlLabelText>Write with me</FormControlLabelText>
            </FormControlLabel>
            <Textarea>
                <TextareaInput placeholder="Once upon a time..." />
            </Textarea>
            <FormControlHelper>
                <FormControlHelperText>Start your story</FormControlHelperText>
            </FormControlHelper>
        </FormControl>
    </>
  )
}

