'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '45.32.22.10',
      port: '3306',
      database: 'xixiblog',
      user: 'yongxi',
      password: 'hello1234',
      prefix: 'li_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};