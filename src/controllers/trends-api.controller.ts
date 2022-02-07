import { LoggerService } from '../services/logger.service';
import { TrendsApiService } from '../services/trends-api.service';

export class TrendsApiController {
	constructor(private trendsApiService: TrendsApiService, private logger: LoggerService) {}

	getAll(options) {
		const repositories = this.trendsApiService
			.getAll(options)
			.then((res) => {
				this.logger.success('Repositories are received');
				res.forEach((repository) => this.logger.printTrend(repository));
			})
			.catch((err) => {
				this.logger.error(err);
			});
	}

	getOne(id, options) {
		const repository = this.trendsApiService
			.getOne(id, options)
			.then((res) => {
				this.logger.success('Repository are received');
				this.logger.printTrend(res);
			})
			.catch((err) => {
				if (err.response.status) {
					this.logger.error('Trend repository not found');
				} else {
					this.logger.error(err);
				}
			});
	}

	sync() {
		this.trendsApiService.sync();
		this.logger.success('Internal timer was reset');
	}
}
