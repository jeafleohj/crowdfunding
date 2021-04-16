import {UserModel} from 'entity/User'
import {UserRepository} from 'entity/UserRepository'

module.exports = (name: string, lastname: string, type: number, document_name: string, document_value: string, userRepository: UserRepository): void => {
  const user = new UserModel(name, lastname, type, document_name, document_value);
  userRepository.persist(user)

}
