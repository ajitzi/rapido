import React from 'react'
import {
  Box,
  Text,
  VStack,
  Button,
  Image,
  Center,
  ButtonText,
} from '@gluestack-ui/themed'

import { Link } from 'solito/link'
import GuestLayout from '../../layouts/GuestLayout'

export default function HomeScreen() {
  return (
    // place GluestackUIProvider in your app root accordingly
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
          <Text>Hello World</Text>
        </Box>
      </Center>
    </GuestLayout>
  )
}
