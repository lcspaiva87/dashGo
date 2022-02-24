import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sider } from "../components/Sidebar";

export default function Dashbord() {
    return (
        <Flex direction='column' h='100vh'>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sider />
            </Flex>
        </Flex>
    )
}