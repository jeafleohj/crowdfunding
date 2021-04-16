import {UserModel} from 'domain/User'
import {UserRepository} from 'domain/UserRepository'

module.exports = (name: string, lastname: string, type: number, document_name: string, document_value: string, userRepository: UserRepository): Promise<UserModel> => {
  const user = new UserModel(name, lastname, type, document_name, document_value);
  return userRepository.persist(user)
}
