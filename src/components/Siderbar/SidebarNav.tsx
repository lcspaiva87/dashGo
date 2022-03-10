import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SlidebarNav() {
    return (
        <>
            <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink children="Dashboard" icon={RiDashboardLine} href="/dashboard" />
                    <NavLink children="Usuários" icon={RiContactsLine}  href="users"/>
                </NavSection>

                <NavSection title="Automação">
                    <NavLink children="Formulários" icon={RiInputMethodLine} href="/forms" />
                    <NavLink children="Automação" icon={RiGitMergeLine} href="/automation" />
                </NavSection>
            </Stack>

        </>

    )
}