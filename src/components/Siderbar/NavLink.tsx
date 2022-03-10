import { Icon, Link as ChakraLink, Text, LinkProps as chakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends chakraLinkProps {
    icon: ElementType
    children: string
    href: string
}
export function NavLink({ icon, href,children, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex'  {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}