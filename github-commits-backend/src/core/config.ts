export interface Config {
  urls: Urlconfig;
};

interface Urlconfig {
  githubAPI: string;
};

const urlConfig: Urlconfig = {
  githubAPI: 'https://api.github.com'
};

export const config: Config = {
  urls: urlConfig
}
