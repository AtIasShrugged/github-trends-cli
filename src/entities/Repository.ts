export interface IRepository {
	_id: string;
	repositoryName: string;
	username: string;
	url: string;
	description?: string;
	language?: string;
	totalStars?: number;
	forks?: number;
}
