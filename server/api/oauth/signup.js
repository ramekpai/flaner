const signUp = async knex => {
// проверка наличия юзера в дб
const response = await knex.select('*').from('users');
// апдейт таблицы

return response;
};

module.exports = signUp;