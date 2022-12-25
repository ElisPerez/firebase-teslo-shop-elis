export class Fruit {
  name: string;
  id: string;
  imageURL: string;
  imageName: string;
  constructor(id: string, name: string, imageURL: string, imageName: string) {
    this.id = id;
    this.name = name;
    this.imageURL = imageURL;
    this.imageName = imageName
  }
}

