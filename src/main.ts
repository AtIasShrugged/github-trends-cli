#!/usr/bin/env node
import { Command } from 'commander';
import { TrendsApiController } from './controllers/trends-api.controller';
import { LoggerService } from './services/logger.service';
import { TrendsApiService } from './services/trends-api.service';

const main = () => {
	const logger = new LoggerService();
	const trendsApiService = new TrendsApiService();
	const trendsApiController = new TrendsApiController(trendsApiService, logger);
	const program = new Command();
	program
		.command('get-all')
		.description('get all saved trends from db')
		.option('-l, --limit <number>', 'set limit for trend output')
		.option('-o, --offset <number>', 'set how many trends to skip')
		.action((options) => trendsApiController.getAll(options));

	program
		.command('get-one')
		.description('get one saved trend from db by id or name')
		.argument('<id>', 'repository id or name')
		.option('--by-name', 'search repository by name')
		.action((id, options) => trendsApiController.getOne(id, options));

	program
		.command('sync')
		.description('reset the internal request timer to the github trends api')
		.action(() => trendsApiController.sync());

	program.parse();
};

main();
