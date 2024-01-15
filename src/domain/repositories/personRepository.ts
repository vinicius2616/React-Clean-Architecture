import { Person } from '../models/person'

export class PersonRepository {
  private persons: Person[] = []

  addPerson(person: Person): void {
    this.persons.push(person)
  }

  getPersonById(id: number): Person | undefined {
    return this.persons.find((person) => person.id === id)
  }

  getAllPersons(): Person[] {
    return this.persons
  }

  updatePerson(id: number, updatedPerson: Person): boolean {
    const index = this.persons.findIndex((person) => person.id === id)

    if (index !== -1) {
      this.persons[index] = updatedPerson
      return true
    }

    return false
  }

  deletePerson(id: number): boolean {
    const initialLength = this.persons.length
    this.persons = this.persons.filter((person) => person.id !== id)
    return this.persons.length !== initialLength
  }
}
