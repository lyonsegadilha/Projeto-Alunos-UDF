/**
 * Up users table.
 *
 * @param  {object} knex
 *
 */
exports.up = function(knex) {
    console.log('generating users table');
    return knex.schema.createTable('cadastro_funcionario', table => {
        table.increments('id').primary().unsigned();
        table.string('nome').notNullable();
        table.string('num_documento').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
        table.string('curso').notNullable();
        table.string('turno').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.bool('status').default(false);
        table.timestamp('created_at');
        table.timestamp('updated_at');
    });
};

/**
 * Drop users table.
 *
 * @param  {object} knex
 *
 */
exports.down = function(knex) {
    console.log('dropping users table');
    return knex.schema.dropTable('cadastro_funcionario');
};