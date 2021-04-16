import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userInfo: {},
		userStatus: undefined,
      repoStatus: undefined
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
		})
	
		octokit.rest.users.getByUsername({
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

	render() {
		const { isLoading, repoList, userInfo, userStatus, repoStatus } = this.state;

		return(
			<CardContent>
					<h1>{ isLoading ? <CircularProgress /> : 'Обо мне' }</h1>
						{!isLoading && userStatus === 200 && 
							<div>
								<img src={userInfo.avatar_url} alt="Фото пользователя" class={styles.img}></img>
								<p className={styles.text}>{userInfo.login}</p>
								<p className={styles.text}>{userInfo.bio}</p>
							</div>}
					{!isLoading && userStatus !== 200 && <p>Информация о пользователе не получена</p>}
								
					<h2>{ isLoading ? <CircularProgress /> : 'Мои репозитории' }</h2>
					{!isLoading && repoStatus ===200 && <ul className={styles.list}>
							{repoList.map(repo => (<li key={repo.id} className={styles.item}>
									<a href={repo.html_url} className={styles.repos}>{repo.name}</a>
								</li>))}
						</ul>}
					{!isLoading && repoStatus !== 200 && <p>Информация о репозиториях пользователя не получена</p>}
				</CardContent>
			);
	}
}
	

export default About;