import { Box, Icon, Link, Text, LinkProps as chakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiGitMergeLine } from "react-icons/ri";

interface NavLinkProps extends chakraLinkProps {
    icon: ElementType
    children: string
}
export function NavLink({ icon, children, ...rest }: NavLinkProps) {
    return (
        <Link display='flex'  {...rest}>
            <Icon as={icon} fontSize="20"  />
            <Text ml="4" fontWeight='medium'>{children}</Text>
        </Link>
    )
}