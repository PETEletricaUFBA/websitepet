export default function SocialIcon({ name, link }: { link: string; name: string }): JSX.Element {
    return (
        <a className="mx-3" href={link} target="_blank" rel="noopener noreferrer">
            <i className={(name == "email")?"fas fat fa-envelope":(name == "site")? "fas fat fa-globe" : "fab fat fa-" + name} ></i>
            {/* <p className="textIcon">{name}</p> */}
        </a>
    );
}


