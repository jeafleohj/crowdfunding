export class Ubigeo {
  id: number
  name: string
  parent_id: number
  constructor({name, parent_id}: Ubigeo) {
    this.name = name.toLocaleLowerCase()
    this.parent_id = parent_id
  }
}
