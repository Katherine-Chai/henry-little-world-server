'use strict';

/**
 * leet-code service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leet-code.leet-code');
