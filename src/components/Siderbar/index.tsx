
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, DrawerBody } from "@chakra-ui/react";
import { SlidebarNav } from "./SidebarNav";




export function Sider() {
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawerSidebar) {
        return (
            <Drawer isOpen={true} placement="left" onClose={() => { }}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SlidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        )
    }
    return (
        <Box as="aside" w="64" mr="8">
            <SlidebarNav />
        </Box>
    )
}