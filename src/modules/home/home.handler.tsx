const ENDPOINT = 'https://jsonplaceholder.typicode.com';
const usersNamespace = 'users';

export default class APIGetUsers {
  static url = ENDPOINT;
  static usersNamespace = usersNamespace;

  static async fetchUser(userID: any) {
    const result = `${APIGetUsers.url}/${usersNamespace}/${userID}`;
    return fetch(result).then(response => response.json());
  }
}
