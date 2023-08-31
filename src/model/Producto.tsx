class Product{

    constructor(codProduct:string,name:string,description:string,price:number)
    {

        this.codProduct = codProduct
        this.name = name
        this.description = description
        this.price = price

    }

    codProduct:string
    name:string
    description:string
    price:number
}

export default Product