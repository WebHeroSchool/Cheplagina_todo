import React from 'react';
import styles from './Contacts.module.css';
import email from './img/email.png';
import phone from './img/phone.png';
import github from './img/github.png';
import vk from './img/vk.png';
import facebook from './img/facebook.png';

const Contacts = () => (
	<div>
		<div className={styles.contacts}>
			<p className={styles.email}>
				<img src={email} alt="email" className={styles.email_img}></img>
				<a href="mailto:makidaschka88@gmail.com" className={styles.email}>makidaschka88@gmail.com</a>
			</p>
			<p className={styles.phone}>
				<img src={phone} alt="phone" className={styles.phone_img}></img>
				<a href="tel:+79616465984" className={styles.phone}>+79616465984</a>
			</p>
		</div>
		<div>
			<a href="https://github.com/CheplaginaNadezhda" className={styles.social}><img src={github} alt="github" className={styles.social_img}></img></a>
			<a href="https://vk.com/toropova_nadi" className={styles.social}><img src={vk} alt="vk" className={styles.social_img}></img></a>
			<a href="https://web.facebook.com/nadezhda.cheplagina" className={styles.social}><img src={facebook} alt="facebook" className={styles.social_img}></img></a>
		</div>
	</div>
);

export default Contacts;