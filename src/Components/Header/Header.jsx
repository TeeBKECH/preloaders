import { React } from "react";
import s from "./Header.module.scss";
import logo from '../../logo.svg';

function Header() {
	return (
		<header className={s.Header}>
			<img src={logo} className={s.Header_logo} alt="logo" />
		</header>
	)
}

export default Header