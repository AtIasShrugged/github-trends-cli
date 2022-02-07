import { IRepository } from '../entities/repository';

export class LoggerService {
	error(err) {
		console.log(`
	${err}
  `);
	}

	success(msg) {
		console.log(`
	Success: ${msg}
  `);
	}

	printTrend(repository: IRepository) {
		const { _id, repositoryName, url, username, description, forks, language, totalStars } =
			repository;
		console.log(`
	RepositoryName: ${repositoryName} 
	Description: ${description}
	Username: ${username}
	Language: ${language}
	url: ${url}
	Total Stars: ${totalStars}
	Forks: ${forks}
	id: ${_id}
    `);
	}
}
