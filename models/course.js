const uuid = require('uuid/dist/v4')

class Course {
    constructor(title, price, img) {
        this.title = title,
        this.price = price,
        this.img = img
        this.id = uuid()
    }

    save() {
        
    }
}