import { Person } from '../models/person'
import { PersonRepository } from '../repositories/personRepository'

export class PersonService {
  private personRepository: PersonRepository

  constructor(personRepository: PersonRepository) {
    this.personRepository = personRepository
  }

  addPerson(name: string, age: number): Person {
    const newPerson = new Person(
      this.personRepository.getAllPersons().length + 1,
      name,
      age
    )
    this.personRepository.addPerson(newPerson)
    return newPerson
  }

  getPersonById(id: number): Person | undefined {
    return this.personRepository.getPersonById(id)
  }

  getAllPersons(): Person[] {
    return this.personRepository.getAllPersons()
  }

  updatePerson(id: number, name: string, age: number): boolean {
    const existingPerson = this.personRepository.getPersonById(id)

    if (existingPerson) {
      const updatedPerson = new Person(id, name, age)
      return this.personRepository.updatePerson(id, updatedPerson)
    }

    return false
  }

  deletePerson(id: number): boolean {
    return this.personRepository.deletePerson(id)
  }
}
