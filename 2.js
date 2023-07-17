const NameUser =(prompt('Введите ваше имя: '));
greeting(NameUser);
function greeting(User) {
    User = 'Приветствую вас пользователь ' + User + '!';
    console.log(User);
    return;
}