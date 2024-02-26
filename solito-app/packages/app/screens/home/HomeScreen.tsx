import * as React from 'react'
import {Box, Center,} from '@gluestack-ui/themed'
import {H1, Text, Badge, H2, Card} from "app/components/library";
import GuestLayout from '../../layouts/GuestLayout'
import {Camera} from "lucide-react-native";

export default function HomeScreen() {
  return (
    <GuestLayout>
      <Center w="$full" flex={1}>
        <Box
          maxWidth={508}
          w="$full"
          minHeight={544}
          sx={{
            '@md': {
              px: '$8',
              bg: '$primary500',
            },
          }}
          px="$4"
          justifyContent="center"
        >
            <Card>
                <H1 size={'sm'}>Hello</H1>
                <Text>World</Text>
                <Badge text={'Test'} icon={Camera} textProps={{mr: '$1'}}/>
            </Card>
        </Box>
      </Center>
    </GuestLayout>
  )
}
