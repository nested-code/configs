import ts from 'typescript'

const host: ts.ParseConfigFileHost = ts.sys as any;

ts.getParsedCommandLineOfConfigFile('tsconfig.json', {}, host)
