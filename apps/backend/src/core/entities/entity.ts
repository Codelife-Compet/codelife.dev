import { UniqueEntityID } from "./unique-entity-id"

export abstract class Entity<Props> {
  private _id: UniqueEntityID 
  protected props: Props

  get id() { return this._id }
  get data() { return this.props }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  toJSON() {
    return {
      id: this.id,
      data: this.data,
    };
  }
}
//   public equals(entity: Entity<any>) {
//     if(entity === this) {
//       return true
//     }
// 
//     if (entity.id === this.id) {
//       return true
//     }
// 
//     return false
//   }
// }
