import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import star from './img/star.png';
import Contacts from '../Contacts/Contacts';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userInfo: {},
		userStatus: undefined,
      repoStatus: undefined,
      firstPage: 0,
      nextPage: 2
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'CheplaginaNadezhda'
		}).then(({ data, status}) => {
			this.setState({
				repoList: data,
				isLoading: false,
				repoStatus: status
			});
		}).catch((error) => {
				this.setState({
					isLoading: false,
					repoStatus: error.status
				})
		});
	
		octokit.users.getByUsername({
  			username: 'CheplaginaNadezhda'
  			}).then(({ data, status}) => {
				this.setState({
					userInfo: data,
					isLoading: false,
					userStatus: status
				});
			}).catch((error) => {
				this.setState({
					isLoading: false,
					userStatus: error.status
				})
		})
	}

	onClickNextPage = () => {
		this.setState({
			firstPage: this.state.firstPage + 2,
			nextPage: this.state.nextPage + 2
		})
	};

	onClickBackPage = () => {
		this.setState({
			firstPage: this.state.firstPage - 2,
			nextPage: this.state.nextPage - 2
		})
	}

	render() {
		const { isLoading, repoList, userInfo, userStatus, repoStatus, firstPage, nextPage } = this.state;

		return(
			<CardContent>
					
						{!isLoading && userStatus === 200 && 
							<div className={styles.info}>
								<img src={userInfo.avatar_url} alt="Фото пользователя"  className={styles.img}></img>

								<div className={styles.info_user}>
									<p className={styles.name}>{userInfo.name}</p>
									<p className={styles.bio}>{userInfo.bio}</p>
									<Contacts/ >
								</div>
							</div>}
					{!isLoading && userStatus !== 200 && <p>Информация о пользователе не получена</p>}

					<h2 className={styles.title}>{ isLoading ? <CircularProgress className={styles.preload} /> : 'Мои проекты:' }</h2>

					{!isLoading && repoStatus === 200 && <div>
							<ul className={styles.project_list}>
								<li className={styles.project_item}><a className={styles.project_link} href="https://cheplaginanadezhda.github.io/Cheplagina_tesla/">Tesla</a></li>
								<li><a className={styles.project_link} href="https://cheplaginanadezhda.github.io/Cheplagina-cards/">Карты с багами</a></li>
							</ul>
						</div>}
								
					<h2 className={styles.title}>{ isLoading ? <CircularProgress className={styles.preload} /> : 'Мои репозитории:' }</h2>

					{!isLoading && repoStatus === 200 && <ul className={styles.list}>
							{repoList.slice(firstPage, nextPage).map(repo => (
								<li key={repo.id} className={styles.item}>
									<a href={repo.html_url} className={styles.repos}>{repo.name}</a>

									<div className={styles.repos_info}>
										<span className={styles.circle}></span>
										<p className={styles.repos_language}> { repo.language }</p>
										<img className={styles.star} src={ star } alt='star'></img>
										<p className={styles.repos_star}>{ repo.stargazers_count }</p>
										<p className={styles.repos_update}>Updated: {repo.updated_at}</p>	
									</div>
								</li>))}
						</ul>}

					{!isLoading && repoStatus !== 200 && <p>Информация о репозиториях пользователя не получена</p>}
					<div className={styles.buttons}>	
						<ButtonGroup  aria-label="outlined secondary button group">
				        <div className={styles.button}><Button disabled={firstPage === 0} onClick = {() => this.onClickBackPage()}>Назад</Button></div>
		      		  <div className={styles.button}><Button disabled={repoList.length - nextPage < 0} onClick = {() => this.onClickNextPage()}>Далее</Button></div>
		      		</ButtonGroup>
		      	</div>	
				</CardContent>
			);
		}
}
	

export default About;