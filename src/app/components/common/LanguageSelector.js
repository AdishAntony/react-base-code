import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="col-sm-6 col-md-8 col-lg-6 col-xl-8 col-xxl-8 col-8 home_langage LanguageSelector home_login">
            {/* <ul id="home_menu">
                <li>
                    <input id="check01" type="checkbox" name="menu" />
                    <label htmlFor="check01">English</label>
                    <ul className="home_submenu">
                        <li>
                            <button onClick={() => changeLanguage('en')}>English</button>
                        </li>
                        <li>
                            <button onClick={() => changeLanguage('hi')}>Hindi</button>
                        </li>
                    </ul>
                </li>
            </ul> */}
            <div className="language">
                <ul>
                    <li>
                        <a href="#">Language</a>
                        <ul className="dropdown">
                            <li>
                                <button onClick={() => changeLanguage('en')}>English</button>
                            </li>
                            <li>
                                <button onClick={() => changeLanguage('hi')}>Hindi</button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
