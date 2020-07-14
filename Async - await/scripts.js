/*
const getName = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Chema');
        }, 1500)
    })
}

const sayHello =  async () => {
    const name = await getName()
    return `Hello ${name}`
}

sayHello().then(res => console.log(res))*/

const users = [
    {id: 1, name: 'Chema'},
    {id: 2, name: 'Rocío'},
    {id: 3, name: 'Roberto'}
]

const emails = [
    {id: 1, email: 'chema@chema.com'},
    {id: 2, email: 'laura@laura.com'}
]

const getUser = async (id) => {
    const user = users.find(user => user.id === id)
    if (!user) throw new Error(`Doesn't exist an user with id ${id}`);
    else return user;
}

const getEmail = async (user) => {
    const email = emails.find(email => email.id === user.id);
    if (!email) throw new Error(`${user.name} hasn't email`);
    else return {
        id: user.id,
        name: user.name,
        email: email.email
    };
}

const getInfo = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    } catch (e) {
        console.log(e)
    }

}

getInfo(3).then(res => console.log(res))
