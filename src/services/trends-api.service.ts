import axios from 'axios';
import { IRepository } from '../entities/repository';

export class TrendsApiService {
	async getAll({ limit, offset }): Promise<IRepository[]> {
		const repositories = await axios.get(
			`https://github-trend-repositories.herokuapp.com/trends?limit=${limit}&offset=${offset}`
		);
		return repositories.data;
	}

	async getOne(id: string, options) {
		const { byName } = options;
		const filter = byName ? 'name' : 'id';
		const repository = await axios.get(
			`https://github-trend-repositories.herokuapp.com/trends/${id}?filter=${filter}`
		);
		return repository.data;
	}

	sync() {
		axios.get('https://github-trend-repositories.herokuapp.com/trends/sync');
	}
}
