import * as React from 'react'
import {
    H1, Text,
    Card,
    Badge, BadgeIcon, BadgeText,
    Box, Center, VStack, HStack, Divider,
    Alert, AlertIcon, AlertText, Progress, ProgressFilledTrack, Spinner,
} from "app/components/library";

import GuestLayout from '../../layouts/GuestLayout'
import {ArchiveIcon, Camera, FileWarning, MessageCircle, PenTool} from "lucide-react-native";
import {View} from "react-native";


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

        <Alert action={'error'}>
            <AlertIcon mr={"$4"} as={Camera}/>
            <AlertText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ullam, voluptas. Adipisci architecto, aspernatur autem beatae doloremque nobis omnis quis rem. Aliquam aperiam doloremque eius fugiat harum illum in reprehenderit.</AlertText>
        </Alert>
    </>
  )
}

