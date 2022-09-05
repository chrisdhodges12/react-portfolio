import React from "react";
import { Icon } from "@iconify/react";


function Footer () {

    const icons = [
        {
            name:"email",
            src: "tabler:mail",
            href: "mailto: chrisdhodges12@gmail.com"
        },
        {
            name: "github",
            src: "bi:github",
            href: "https://github.com/chrisdhodges12"
        },
        {
            name: "linkedIn",
            src: "akar-icons:linkedin-box-fill",
            href: "https://www.linkedin.com/in/chris-hodges-928208236/"
        }
    ]

    return (
        <footer>
            <div className="d-flex justify-content-evenly mt-4">
                {icons.map(icon => (
                    <a
                        href={icon.href}
                        target="_blank"
                        rel="noreferrer"
                        key={icon.name}
                        className="btn icon-btns"
                    >
                        <Icon  className="icon-btns"  icon={icon.src} width="50" />
                    </a>
                ))}
            </div>
            <div className="mt-4">
                <h6 className="d-flex justify-content-center mb-2">
                Developed by Chris Hodges &copy; 2022
                </h6>
            </div>
        </footer>
    )
}

export default Footer;
