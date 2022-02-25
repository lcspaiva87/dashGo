import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr="4" textAlign='right'>
                <Text>Lucas Paiva</Text>
                <Text
                    color="gray.300"
                    fontSize='small'>
                    lcspaiva7@gmail.com
                </Text>
            </Box>
            <Avatar size='md' name="lucas antonio paiva da slva" />
        </Flex>
    )
}