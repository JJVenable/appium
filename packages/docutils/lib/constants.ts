/**
 * Constants used across various modules in this package
 * @module
 */
import {LogLevel} from 'consola';
import {readFileSync} from 'node:fs';
import {fs} from '@appium/support';
import path from 'node:path';
import {PackageJson} from 'type-fest';

/**
 * CLI executable name
 */
export const NAME_BIN = 'appium-docs';

/**
 * Expected name of the `mkdocs.yml` config file
 */
export const NAME_MKDOCS_YML = 'mkdocs.yml';

/**
 * Default name of the `tsconfig.json` config file
 */
export const NAME_TSCONFIG_JSON = 'tsconfig.json';
/**
 * `python` executable
 */
export const NAME_PYTHON = 'python';
/**
 * Default name of the `typedoc.json` config file
 */
export const NAME_TYPEDOC_JSON = 'typedoc.json';
/**
 * It's `package.json`!
 */
export const NAME_PACKAGE_JSON = 'package.json';
/**
 * Name of the `requirements.txt` file for `pip`
 */
export const NAME_REQUIREMENTS_TXT = 'requirements.txt';
/**
 * Name of the `$schema` property which can be present in JSON files; it may need to be removed to
 * avoid warnings/errors by 3p libs
 */
export const NAME_SCHEMA = '$schema';
/**
 * Name of the `mkdocs` executable
 */
export const NAME_MKDOCS = 'mkdocs';

/**
 * Name of the `mike` executable
 */
export const NAME_MIKE = 'mike';

/**
 * Name of the `typedoc` executable
 */
export const NAME_TYPEDOC = 'typedoc';

/**
 * Name of the `pip` module.
 *
 * @remarks We don't execute the `pip` executable; but rather use `python -m pip` since that seems
 * to work better ... on my computer.
 */
export const NAME_PIP = 'pip';

/**
 * Name of the `npm` executable, which we use to check for
 */
export const NAME_NPM = 'npm';

/**
 * The name of the `typescript` package (not the `tsc` executable)
 */
export const NAME_TYPESCRIPT = 'typescript';

/**
 * Code for a "file not found" error
 */
export const NAME_ERR_ENOENT = 'ENOENT';

/**
 * Code for a "file already exists" error
 */
export const NAME_ERR_EEXIST = 'EEXIST';

/**
 * Default log level
 */
export const DEFAULT_LOG_LEVEL = 'info';
/**
 * Blocking I/O
 */
export const PKG_ROOT_DIR = fs.findRoot(__dirname);
/**
 * Blocking I/O
 */

export const DOCUTILS_PKG: PackageJson = JSON.parse(
  readFileSync(path.join(PKG_ROOT_DIR, NAME_PACKAGE_JSON), 'utf8')
);

/**
 * Path to the `requirements.txt` file (in this package)
 */

export const REQUIREMENTS_TXT_PATH = path.join(PKG_ROOT_DIR, NAME_REQUIREMENTS_TXT);

/**
 * The default output path for Typedoc, computed relative to the consuming package's root
 */
export const DEFAULT_REL_TYPEDOC_OUT_PATH = path.join('docs', 'reference');

/**
 * The default branch to deploy to
 */
export const DEFAULT_DEPLOY_BRANCH = 'gh-pages';

/**
 * The default remote to push the deployed branch to
 */
export const DEFAULT_DEPLOY_REMOTE = 'origin';

/**
 * The default port for serving docs
 */
export const DEFAULT_SERVE_PORT = 8000;

/**
 * The default host for serving docs
 */
export const DEFAULT_SERVE_HOST = 'localhost';

/**
 * Mapping of `@appium/docutils`' log levels to `consola` log levels
 */
export const LogLevelMap = {
  silent: LogLevel.Silent,
  error: LogLevel.Error,
  warn: LogLevel.Warn,
  info: LogLevel.Info,
  debug: LogLevel.Debug,
} as const;

/**
 * Default site nav header text
 */
export const DEFAULT_NAV_HEADER = 'Reference';
