'use strict';

const CONSTANTS = require('./core/Constants');
const Service = require('./core/Service');
const Package = require('./core/Package');
const PackageGraph = require('./core/PackageGraph');
const Command = require('./core/Command');
const requireMicro = require('./utils/requireMicro');

const {
    moduleAlias,
    smartMerge,
    virtualFile,
    injectHtml,
    logger,
} = require('@micro-app/shared-utils');

// 核心模块不在提供工具
const utils = {
    smartMerge,
    moduleAlias,
    virtualFile,
    injectHtml, // 可移除
    requireMicro,
};

module.exports = Service;

Object.keys(utils).forEach(key => {
    module.exports[key] = utils[key];
});

module.exports.Service = Service; // 兼容
module.exports.Command = Command;
module.exports.CONSTANTS = CONSTANTS;
module.exports.logger = logger;
module.exports.Package = Package;
module.exports.PackageGraph = PackageGraph;
