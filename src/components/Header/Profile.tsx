import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
    showProfileData?: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {

    return (
        <Flex align='center'>
            {
                showProfileData && (
                    <Box mr="4" textAlign='right'>
                        <Text>Lucas Paiva</Text>
                        <Text
                            color="gray.300"
                            fontSize='small'>
                            lcspaiva7@gmail.com
                        </Text>
                    </Box>
                )
            }
            <Avatar size='md' name="lucas antonio paiva da slva" src="https://github.com/lcspaiva87.png" />
        </Flex>
    )
}