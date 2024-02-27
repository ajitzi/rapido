import * as React from 'react'
import {H1, Text, Badge, Card, Box, Center, VStack, HStack, Divider} from "app/components/library";
import GuestLayout from '../../layouts/GuestLayout'
import {ArchiveIcon, Camera, MessageCircle, PenTool} from "lucide-react-native";
import {View} from "react-native";

export default function HomeScreen() {
  return (
    <Center /*height={'$full'} sx={{_web: {height: '100vh'}}}*/>
        <Card>
            <H1 size={'sm'}>Hello</H1>
            <Text>World</Text>
            <HStack space={'xs'}>
                <Badge text={'Test'} icon={PenTool} textProps={{mr: '$1'}}/>
                <Divider orientation='vertical'/>
                <Badge text={'Blah'} icon={MessageCircle} textProps={{mr: '$1'}}/>
                <Divider orientation='vertical' />
                <Badge text={'Quiniou'} icon={ArchiveIcon} textProps={{mr: '$1'}}/>
            </HStack>
        </Card>
    </Center>
  )
}
