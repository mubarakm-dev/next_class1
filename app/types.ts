

export type ComplexProducts = {
      "id": number,
      "title": string,
      "description": string,
      "category": string,
      "price": number,
      "discountPercentage": number,
      "rating": number,
      "stock": number,
      "tags": string[]
      "brand": string,
      "sku": string,
      "weight": number,
      "dimensions": {
        "width": number,
        "height": number,
        "depth": number
      },
      "warrantyInformation": string,
      "shippingInformation": string,
      "availabilityStatus": string,
      "reviews": RatingsDeets[],

      "returnPolicy": string,
      "minimumOrderQuantity": number,
      "meta": {
        "createdAt": string,
        "updatedAt": string,
        "barcode": string,
        "qrCode": string,
      },
      "thumbnail": string,
      "images": Array<string>,
    }
  
  
   type RatingsDeets = {

     "rating": number,
        "comment": string,
          "date": string,
          "reviewerName": string,
          "reviewerEmail": string

   }


   export type BlogPosts = {
    "id": number,
      "title": string,
      "body": string,
      "tags": string[], 
      "reactions": {
        "likes": number,
        "dislikes": number
      },
      "views":number,
      "userId": number,
      author: string,
    }
   