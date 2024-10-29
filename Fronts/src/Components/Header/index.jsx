import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./style.js";


export function Header() {

    

    return(
        <Container>
            <Profile>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz2AbtsmwWoRa3xTS5yUMeCXaIz6gHJQy1A&s" alt="Foto de Usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>UniFG</strong>
                </div>
            </Profile>

            <Logout >
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}