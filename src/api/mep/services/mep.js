'use strict';

/**
 * mep service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mep.mep');
