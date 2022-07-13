import './styles.css';
import Logo from '../../assets/img/logo.svg'

export const Header = () => {
    return (
        <header>
            <div className="dsmeta-logo-container">
                    <img src={Logo} alt="logo" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig/" target="_blank">@devsuperior.ig</a></p>
            </div>
        </header>
    );
}