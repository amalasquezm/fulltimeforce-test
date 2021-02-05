export interface Config {
  urls: Urlconfig;
};

interface Urlconfig {
  customGithubAPI: string;
};

const urlConfig: Urlconfig = {
  customGithubAPI: 'http://localhost:3000'
};

export const config: Config = {
  urls: urlConfig
}
