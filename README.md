# Trending GitHub Repositories CLI

**CLI to interact with GitHub Trends service**

## Installation

```bash
npm i -g github-trends-cli
```

## Usage

```bash
gh-trends -h
```

**or**

```bash
npx github-trends-cli -h
```

## Commands

- **gh-trends get-all** - get all trend repositories from db
  - **gh-trends get-all -l [number] -o [number]** - set limit and offset
- **gh-trends get-one <id>** - get trend repository from db by id
  - **gh-trends get-one <id> --by-name** - get trend repository from db by name
- **gh-trends sync** - reset the internal request timer to the github trends api
