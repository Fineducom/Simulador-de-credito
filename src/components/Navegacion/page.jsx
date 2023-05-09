import Image from 'next/image'
import Link from 'next/link'
import './Navegacion.scss'
export default function Navegacion() {
	return (
		<>
			<nav className="menu">
				<div className="menu__contenedor">
					<Link href={'/'} className="menu__link">
						{' '}
						<i className="bx bx-arrow-back"></i> Atrás
					</Link>
					<Image
						src={'/img/logo.png'}
						width={150}
						height={80}
						alt=""
						className="menu__img"
					/>
					<Link href={'#'} className="menu__link">
						Salir<i className="bx bx-exit"></i>
					</Link>
				</div>
			</nav>
		</>
	)
}
