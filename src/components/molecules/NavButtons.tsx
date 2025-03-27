import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SectionNav = ({ className, nav, section, text }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();

        if (location.pathname !== nav) {
            navigate(nav); // Navigate to the page first

            // Wait for navigation to complete, then scroll to the section
            setTimeout(() => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: "smooth" });
                }
            }, 300); // Give time for page load
        } else {
            // Already on the correct page, just scroll to section
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <a className={className} href={nav} onClick={handleClick}>
            {text}
        </a>
    );
};

export default SectionNav;