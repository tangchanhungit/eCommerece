import { Footer as FlowbiteFooter, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function AppFooter() {
    return (
        <FlowbiteFooter className="bg-dark mt-auto py-4">
            <div className="text-center">
                <FooterCopyright
                    href="#"
                    by="Flowbite™"
                    year={2024}
                />
                <FooterLinkGroup className="flex justify-center space-x-4 mt-2">
                    <FooterLink href="#">About</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Licensing</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                </FooterLinkGroup>
            </div>
        </FlowbiteFooter>
    );
}
