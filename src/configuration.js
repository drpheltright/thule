import path from 'path';

function defaultConfig(rootDir = process.cwd()) {
  const app = {
    assetsPath: path.resolve(rootDir + '/app/assets/'),
    tmpPath: path.resolve(rootDir + '/tmp/'),
    rootPath: path.resolve(rootDir + '/'),
    viewsPath: path.resolve(rootDir + '/app/views/')
  };

  const express = {
    serveStatic: false
  };

  return { port: 3000, app, express };
}

export function loadConfig({ env, rootDir }) {
  return defaultConfig(rootDir);
}
