import React, { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

import { NavLink } from 'react-router-dom';

import './style.css';

import UserContext from '../../Contexts/User';

const Header = () => {
    const data = useContext(UserContext);

    return (
        <header className="ds-flex ds-flex__justify--space-between">
            <div className="ds-flex__item">
                Logo
            </div>

            <div className="ds-flex ds-flex__item relative">
                <AiOutlineSearch className="absolute" size={20} style={{ left: '10px', top: '10px' }} />

                <input type="text" className="form-control input__search" placeholder="O que você procura?" />
            </div>

            <div className="ds-flex ds-flex__justify--end ds-flex__item">
                {
                    data && data.name ? (
                        <div>
                            Olá, <strong>{data.name}</strong>
                        </div>
                    ) : (
                        <div>
                            <NavLink to="login">Entre</NavLink> ou <NavLink to="/register">Cadastre-se</NavLink>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default Header;
